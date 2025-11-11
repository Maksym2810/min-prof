console.log ("Hello World!");
    console.log ("This is Oleksandr.");
    console.log ("i am learning JavaScript."+ " it is awesome!"+ " i love it!");
    console.log ("GEIR er født i året" + " 1979 " + " og han er"+ " (1979-2025)" + "år gammel.");
   //opgave 2-9
    let name = "Maksym";
    let alder1 = null;
    alder = 23;
    let alder2 = 2025-2002;
 
    var x = 20;   // gammel måte
    let y = 20;   // ny måte
 
    let alder3 = 20; // kan endres
    const fødselsår = 2005; // kan ikke endres
    //Datatyper i JavaScript
    // String
    let navn1= "Maksym";
    // Number
      let alder4 = 20;
      // Boolean
      let erStudent = true; // false
 
      //Object
      let person = {
        navn: "Maksym",
        alder: 20,
        erStudent: true
      };
      сonsole.log(person.navn); // MAKSYM
 
      // Array
      let frukter = ["eple", "banan", "appelsin"];
      сonsole.log(frukter[0]); // eple
      сonsole.log(frukter[2]); // appelsin
      // null
      let navn5 = null;
      // undefined
      let alder; // verdi er undefined
      // symbol
      let id = Symbol("id");
      let id2 = Symbol("id");
      сonsole.log(id === id2); // false
 
      //undefined-variabelen finnes, men har ingen verdi
      let navn;// verdi er undefined
      let adresse = null; // verdi er null-variabelen har en tom verdi satt manuelt