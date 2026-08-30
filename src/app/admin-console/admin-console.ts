import { Component, signal } from '@angular/core';
import { ProductDto } from '../request/productDto';
import { AdminService } from '../services/admin-service/admin-service';
import { ProductInfoDto } from '../dtos/productInfoDto';

@Component({
  selector: 'app-admin-console',
  imports: [],
  templateUrl: './admin-console.html',
  styleUrl: './admin-console.css',
})
export class AdminConsole {

  prodIdList = signal<string[]>([]);
  productId = signal<string>('');
  productNameSignal = signal<string>('');

    constructor(private adminService:AdminService){
    this.adminService.fetchProducts().subscribe({
      next: (data) => {
        const prodDtoList = data as ProductInfoDto[];
        const ids = prodDtoList.map(
          prodDto => `${prodDto.productId} : ${prodDto.name}`
        );
        this.prodIdList.set(ids); 
        
        
      },
      error: (err) => {
        // Triggers if the request fails
        console.error('Request failed:', err); 
      },
      complete: () => {
        // Triggers once the data stream terminates entirely
        console.log('Stream finished.'); 
      }
    });
    
  }


  productDesc: HTMLTextAreaElement | null = null;
  productPrice: HTMLInputElement | null = null;
  category: HTMLSelectElement | null = null;
  listElement: HTMLElement | null = null;
  productName: HTMLInputElement | null = null;
  
  ngOnInit(){
    this.productDesc = document.getElementById("product_description") as HTMLTextAreaElement;
    this.productPrice = document.getElementById("product_price") as HTMLInputElement;
    this.category = document.getElementById("product_category") as HTMLSelectElement;
    this.listElement = document.getElementById("files-list") as HTMLElement;
    this.productName = document.getElementById("product_name") as HTMLInputElement;

  }
  addFn() {
    const listElement = document.getElementById("files-list");
    const elementCount =listElement?.getElementsByTagName("li").length;
    this.addListItem(elementCount!+1);
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      const idOfElement = target.id;
      const idNumber = idOfElement.substring(idOfElement.length-1,idOfElement.length);
      console.log(idNumber);
      const imgButton = document.getElementById("cross_button_"+idNumber) as HTMLElement;
      //imgButton.classList.add("file-selected");
      imgButton.style.display="block";
      // Handle file change logic here
    }
  }

  removeFile(event: Event){
    const target = event.target as HTMLElement;
    target.classList.remove("file-selected");
    const idOfElement = target.id;
    const idNumber = idOfElement.substring(idOfElement.length-1,idOfElement.length);
    console.log(idNumber);
    
    const fileUpload = document.getElementById("fileUpload_"+idNumber) as HTMLInputElement;
    fileUpload.value = "";
    document.getElementById("list_item_"+idNumber)?.remove();

  }

  addListItem(id:Number){
    const file_list = document.getElementById("files-list");
    const list_item = document.createElement("li");
    list_item.id="list_item_"+id;
    file_list?.appendChild(list_item);
    const divElement = document.createElement("div");
    divElement.style.display="flex";
    list_item.appendChild(divElement);
    const inputElement = document.createElement("input");
    inputElement.type="file";
    inputElement.id="fileUpload_"+id;
    inputElement.addEventListener("change",this.onFileChange);
    divElement.appendChild(inputElement);
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src","assets/cross-button.jpg");
    imgElement.id="cross_button_"+id;
    imgElement.addEventListener("click",this.removeFile);
    imgElement.setAttribute("width","20px");
    imgElement.setAttribute("height","20px")
    divElement.appendChild(imgElement);
    imgElement.classList.add("removeImage");
  }

  toggleSideBar(event:Event){
    const sidebar = event.target as HTMLElement;
    sidebar.classList.toggle("close");
  }

  validateAndsubmitRequest(){
    const product :ProductDto = {} as ProductDto;
    const prodDesc=this.productDesc!.value;
    const prodPrice = this.productPrice!.value;
    const category=this.category!.value;
    const prodName = this.productName!.value;
    
    if(prodName.length===0){
      //add a class to it
      return;
    }
    product.name = prodName;

    if(prodDesc.length===0){
      //add a class to it
      return;
    }
    product.description = prodDesc;

    if(prodPrice.length===0&&this.isNumeric(prodPrice)){
      return;
    }
    //product.price = prodPrice;
    if(category===""){
      return;
    }
    //product.category = category;
    const  imageList = [];
    for(let i=1;i<=6;i++){
      const image_url_button = document.getElementById("image_url_"+i) as HTMLInputElement
      if(image_url_button.value.length!=0){
        imageList.push(image_url_button.value);
      }
    }
    product.imageList = imageList;
    this.adminService.addProduct(product).subscribe({
      next: (res) => {
        
        console.log('Response:', res);
      },
      error: (err) => console.error('Error:', err)
    });
    
  }

  private isNumeric(num:string) {
    return !isNaN(parseFloat(num)) && isFinite(parseFloat(num));
  }


  updateForm(event:Event){
    const selectedElement=event.target as HTMLSelectElement;
    if(selectedElement.value.length!=0){
      let params=selectedElement.value.split(":");
      if(params.length>1){
        this.adminService.fetchProduct(params[0].trim()).subscribe(data=>{
          console.log(data);
          this.productId.set(data.productId);
          this.productNameSignal.set(data.name)
        });
      }
    }
    console.log(selectedElement.value);
  }


}
