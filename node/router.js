 function RouterData(route,handler){
   this.route = route||'';
   this.handler = handler||{};
 }
 
 function Router(){
   var routers = [];
   this.addRoute = function(route, handler){
     if(!route||!handler) return;
     var routeData = new RouterData(route, handler);
     routers.push(routeData);
   };
 	
   this.handleRoute = function(route, req, res){
   	 var params = route.split("/").slice(1);
     var handler = getRouteHandlerByRoute(params[0]);
     if(!handler){
         return;
     }
     res.setHeader('Access-Control-Allow-Origin','*');     
     handler.exec(params, req, res);
   };
   
   function getRouteHandlerByRoute(route){
     var n = routers.length;
     var handler = null;
     for (var i = n - 1; i >= 0; i--) { 
         if(routers[i].route === route){
             handler = routers[i].handler;
             break;
         }
     }
     return handler;
   }
 }
 
module.exports = new Router();