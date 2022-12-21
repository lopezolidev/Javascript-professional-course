
export function create(context) {
    return {
      //lo que queremos corregir
      VariableDeclaration(node){
         //recibe un nodo
         //reglas:
         // el tipo de variable debe ser constante 
        if(node.kind === "const"){
          //seleccionar el primer elemento de las declarations
          const declarations = node.declarations[0];
          
          //asegurarnos si el valor es un numero
          if(typeof declarations.init.value === "number"){
            
            //confirmar si el nombre de la variable esta en UPPERCASE
            if(declarations.id.name !== declarations.id.name.toUpperCase()) {
             
              //reportar el error
              context.report({
               node: declarations.id,
               message: "El nombre de la variable debe estar en mayúsculas",
              //ahora creemos un fixer, que va a corregir el error
               fix: function(fixer){
                 return fixer.replaceText(declarations.id, declarations.id.name.toUpperCase())
               } 
              })
            }
          }
        }
      }
      };
    };
    