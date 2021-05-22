export default ({ app }) => {
  app.router.afterEach((to, from) => {
      var current = document.getElementById('statcount')
      if (current) {
        current.src = "https://secure.statcounter.com/counter/counter_xhtml.js";
      } else {
        var s = document.createElement("script");
        s.id = "statcount";
        s.type = "text/javascript";
        s.src = "https://secure.statcounter.com/counter/counter_xhtml.js";
        s.async = true;
        document.body.appendChild(s); 
      }
  })
}