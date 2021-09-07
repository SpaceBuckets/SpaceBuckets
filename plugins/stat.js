export default ({ app }) => {
  app.router.afterEach((to, from) => {
       if (process.client) {
        // var current = document.getElementById('statcount')
        // if (current) {
        //   current.src = "https://c.statcounter.com/8400951/0/f591167d/1/?t=" + new Date().getTime();
        // } else {
        //   var s = document.createElement("img");
        //   s.id = "statcount";
        //   s.src = "https://c.statcounter.com/8400951/0/f591167d/1/?t=" + new Date().getTime();
        //   document.body.appendChild(s); 
        // }
        fetch('https://bucket-st.herokuapp.com/', {mode: 'cors'});

      } 
  })
}