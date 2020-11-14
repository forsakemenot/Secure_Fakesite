let check_arrrow = 0
function ShowType() {
  if (check_arrrow == 0) {
    document.getElementById("type_product_part2").style.display = "flex";
    document.getElementById("img_arrow").style.transform = "rotate(180deg)";
    check_arrrow++
  }
  else{
    document.getElementById("type_product_part2").style.display = "none";
    document.getElementById("img_arrow").style.transform = "rotate(0deg)";
    check_arrrow = 0
  }
}

