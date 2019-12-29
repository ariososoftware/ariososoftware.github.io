AFRAME.registerComponent('video-vidhandler', {
    init: function() {
      this.vid = document.querySelector("#invitation");
      this.prevPosition = null;
      this.prevRotation = null;
      this.toggle = false;
      this.vid.pause();
    },
   tick: function() {
     if (this.el.object3D.visible) {
        if (!this.toggle) {
            this.toggle = true;
            this.vid.play();
            this.vid.setAttribute('scale','2 0.75');
        }
       if(this.prevPosition) {
         this.vid.object3D.position.lerp(this.prevPosition, 0.1)
         let rot = this.target.object3D.rotation.toVector3().lerp(this.prevRotation, 0.1)
         this.vid.object3D.rotation.setFromVector3(rot)
       } else {
         this.vid.setAttribute('position', this.el.getAttribute('position'))
         this.vid.setAttribute('rotation', this.el.getAttribute('rotation'))
       }
       this.prevPosition = this.el.object3D.position
       this.prevRotation = this.el.object3D.rotation
      } else {
        this.toggle = false;
        this.vid.pause();
        this.prevPosition = null;
        this.prevRotation = null;
      }
   }
 })
