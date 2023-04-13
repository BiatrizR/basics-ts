# ANGULAR
##
 ### Binding / data binding (associação de dados)
    * um estado passado para a parte visual, como um botão de comprar que ao clicar muda para carrinho.
    * Tipos de Binding:
      - interpolação => {{valor}}
      ```
      <button>{{ label }}</button>
      ```
      - Property binding => [property] = "valor"

      > Event binding => (evento) = "Handler
        ```
           <button (click)="getAlert()"></button>
           <button (mouseover)="getAlert()"></button>
         ```
      - two way data BINDING => [(ngModel)] = "property" /(comunicação do ts para js) 
        ``` 
        ts > html
          nomeigual.ts
            class nomeclass{
              placeholde: string ="e-mail"
            }

         nomeigual.html 
         <input
            type="text"
            [value]="placeholder"
         /> 
            <p>{{ placeholder }} </p>
       
        ```
        ```
        html > ts
        nomeigual.html 
         <input
            type="text"
            [value]="placeholder"
            (input)="placeholder = $any($event.target).value"
         /> 
        ```


### DIRETIVAS
    - Manipulação dinâmica do DOM
#### Diretivas de atributo
  -NgClass
  -NgStyle
  -NgModel
#### Direstivas estruturais
  -NgIf
  -NgFor
  -NgSwitch

*ngModel
- two way data BINDING => [(ngModel)] = "property" /(comunicação do ts para js) 
     
        ```
        ts > html
          nomeigual.ts
            class nomeclass{
              placeholde: string ="e-mail"
            }
         
        nomeigual.html 
         <input
            type="text"
            [(ngModel)] ="placepass"
         /> 

         <p>{{ placepass }} </p>
        ```