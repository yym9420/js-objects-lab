const aCar = {
    owner: "Joe Bloggs",
    previous_owners: [
      { name: "Pat Smith", address: "1 Main Street" },
      { name: "Sheila Dwyer", address: "2 High Street" }
    ],
    
  }
  
  console.log(
    "First owner: " +
      aCar.previous_owners[0].name +
      ' - ' +
      aCar.previous_owners[0].address
  )