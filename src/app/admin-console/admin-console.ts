import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-console',
  imports: [],
  templateUrl: './admin-console.html',
  styleUrl: './admin-console.css',
})
export class AdminConsole {

  addFn() {
    const listElement = document.getElementById("files-list");
    const elementCount =listElement?.getElementsByTagName("li").length;
    this.addListItem(elementCount!+1)
    
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


}
