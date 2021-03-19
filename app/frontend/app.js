

var animationQuery = setInterval(()=>{
    $('#query').hide(3000)
               .show(3000)
},10000)

var AnimationSecondQuery = setInterval(()=>{
    $('#secondquery').hide(3000)
                     .show(3000)
                     
},2000)

        //liberar o código abaixo ao terminar
alert('touch in the third card')

$('#thirdquery').click(function(){
       $(this).fadeOut('slow')
              .show(2000)
              .fadeToggle(3000)
              .show(5000)
              .slideDown(4000)
              .show(2000)
              .slideUp(4000)
              .show(5000)
})



/** ajax request */


var url = 'http://localhost:3000/server'

fetch(url, ({mode:"cors"})).then(res => res.json())
          .then(response =>{
                let data = response.map(contents =>{
                console.log('nivel:' + contents.nivel + ',' + 'tecnologia:' + contents.tecnologia)   
              })
			  
			  document.body.innerHTML = data
          })
          .catch((err)=>{
             let main = document.getElementById('main')

             let message = 'Error:  problem with server request'
             let request = document.getElementById('request') 
             
             request.append(message)
            
             main.append(request)
             console.log(err)
             })  

 