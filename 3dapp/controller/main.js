function loadModel(modelName) {
  $("inline").attr("url", `../assets/${modelName}.x3d`);
  $.getJSON(`../model/database.php?model=${modelName}`, function (data) {
    if (data && data.description && data.title) {
      $("#modelTitle").html(data.title);
      $("#modelDescription").html(data.description);
    } else {
      $("#modelTitle").html("No title available");
      $("#modelDescription").html("No description available");
    }
  }).fail(function () {
    console.error("Failed to fetch data");
    $("#modelDescription").html("Error fetching description");
  });
}

function setWireframe(mode) {
  let elements = document.getElementsByTagName('x3d');
  for (let i = 0; i < elements.length; i++) {
      elements[i].runtime.togglePoints(mode);
  }
}

function changeCameraView(view) {
  const viewpoints = document.querySelectorAll("Viewpoint");
  viewpoints.forEach((vp) => {
    vp.setAttribute("set_bind", "false");
    if (vp.getAttribute("id") === view) {
      vp.setAttribute("set_bind", "true");
    }
  });
}

function changeLighting() {
  const light = document.getElementById("mainLight");
  const enabled = light.getAttribute("on") === "true";
  light.setAttribute("on", !enabled);
}
