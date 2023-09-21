const aCar = {
    
 };
 
 console.log(aCar.owner + " drives a " + aCar.type.make);
 console.log(
   "Reg. = " +
     aCar.registration.year +
     "-" +
     aCar.registration.county +
     "-" +
     aCar.registration.number
 );
 
 aCar.milage = 10000
 aCar.color = {
   exterior: "red",
   interior: { texture: "leather", shade: "cream" }
 }
 
 console.log(
   "It is a " +
     aCar.color.exterior +
     " car, " +
     aCar.milage +
     " milage, with " +
     aCar.color.interior.texture +
     " interior."
 );