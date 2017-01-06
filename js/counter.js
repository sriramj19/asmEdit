var countBox =2;
  var itemName = 0;
  var itemAmount = 0;
  function addInputFields()
    {
     var itemName = "formData.item"+countBox+"Name";
     console.log(itemName);
     document.getElementById('additionalFields').innerHTML+='<br/><input type="text" ng-model="'+itemName+'" placeholder="What gift do you addittionally want???" "  /><br/>';
     if(countBox==2){
       document.getElementById('item2Image').style.display="block";
     }
     else if(countBox==3){
       document.getElementById('item3Image').style.display="block";
     }
    //  var itemImage = "item"+countBox+"Image";
    //  var imageString = '<br/> <div class="button" ngf-select ng-model=""+itemImage+"" name=""+itemImage+"" ngf-pattern="'image\/\*'" ngf-accept="'image\/\*'" ngf-min-height="100" ngf-resize="{width: 260, height: 227}">Select</div> <button ng-click="img(itemImage,countBox)">Submit</button> <br/>' ;
    //  document.getElementById('additionalFields').innerHTML+= imageString;
     var itemAmount = "formData.item"+countBox+"Amount";
     console.log(itemAmount);
    //  var itemImage = "item"+countBox+"Image";
      document.getElementById('additionalFields').innerHTML+='<br/><input type="float" ng-model="'+itemAmount+'" placeholder="How much is the estimated cost???" /><br/>';
     countBox += 1;
    }
