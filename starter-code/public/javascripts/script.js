document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);

$("#password").strength({
  strengthClass: "strength",
  strengthMeterClass: "strength_meter",
  strengthButtonClass: "button_strength",
  strengthButtonText: "",
  strengthButtonTextToggle: ""
});
