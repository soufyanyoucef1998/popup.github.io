let openModel =document.querySelectorAll('[data-modal-target]');
 openModel.forEach(open =>{

open.addEventListener('click',(e)=>{
    /*craet an overlay */
    let overley = document.createElement('div');
    overley.classList = 'active';
    overley.id = 'overlay';
    document.body.appendChild(overley);
      /*craet an overlay box */
      let overlayBox = document.createElement('div');
      overlayBox.classList = 'modal';
      overlayBox.classList.add('active');
      document.body.appendChild(overlayBox);
      /*craet an overlay box content */
      let title = document.createElement('div');
      title.classList = 'title';
      /*craet three span */
      let span = document.createElement('span');
      let secondspan = document.createElement('span');
      let thirdspan = document.createElement('span');

      title.appendChild(span);
      title.appendChild(secondspan);
      title.appendChild(thirdspan);
      overlayBox.appendChild(title);




      /*craet modal body */
      let modalBody = document.createElement('div');
      modalBody.classList = 'modal-body';
      /*craet modal body content*/
      let h = document.createElement('h1');
      h.innerHTML = open.innerHTML;
      let button = document.createElement('button');
      button.innerHTML = 'Close!'
      button.classList ='class="close-button';
      modalBody.appendChild(h);
      modalBody.appendChild(button);
      overlayBox.appendChild(modalBody);
      button.addEventListener('click',()=>{
        button.parentElement.parentElement.remove();
        overley.remove();
      })

})


















   
 })
 