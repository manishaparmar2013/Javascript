<br><b><font color=black>SELECT POLO COLOR</b><br>

<a href="javascript:void(0)" onclick="selectRadio('Blue');">
<img src="custom/images/PoloBlue.jpg" width="78" height="78" border="0"/></a>

<a href="javascript:void(0)" onclick="selectRadio('Gray');">
<img src="custom/images/PoloGray.jpg" width="78" height="78" border="0"/></a>

<a href="javascript:void(0)" onclick="selectRadio('Green');">
<img src="custom/images/PoloGreen.jpg" width="78" height="78" border="0"/></a>

<a href="javascript:void(0)" onclick="selectRadio('Orange');">
<img src="custom/images/PoloOrange.jpg" width="78" height="78" border="0"/></a>

<a href="javascript:void(0)" onclick="selectRadio('Red');">
<img src="custom/images/PoloRed.jpg" width="78" height="78" border="0"/></a>

<a href="javascript:void(0)" onclick="selectRadio('Turquoise');">
<img src="custom/images/PoloTurquoise.jpg" width="78" height="78" border="0"/></a>

<script src="https://js.worksmartsuite.com/all.js"></script>
<script type="text/javascript">
function selectRadio(mySelection) {
	FormSetFieldValue("YourField", mySelection);
	FormUpdatePreview ();
	PFSF_ShowHideConditionalFields();
}
</script>