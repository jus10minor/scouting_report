const form = document.querySelector("#player-form");
const output = document.querySelector("#player-output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const stats = {
    pname: form.elements.pname.value,
    height: form.elements.height.value,
    pos: form.elements.pos.value,
    num: form.elements.num.value,
    ppg: form.elements.ppg.value,
    apg: form.elements.apg.value,
    rpg: form.elements.rpg.value,
    fg: form.elements.fg.value,
    tp: form.elements.tp.value,
    bpg: form.elements.bpg.value,
    spg: form.elements.spg.value,
    tpg: form.elements.tpg.value,
    notes: form.elements.notes.value,
  };

  const playerCard = document.createElement("div");
  playerCard.classList.add("card", "p-3", "mt-3");

  playerCard.innerHTML = `
          <h3 class="mb-3"><strong>${stats.pname}</strong></h3>
            <div class="d-flex flex justify-content-center mb-3">
              <div><strong>${stats.num} &#x2022; ${stats.height} &#x2022; ${stats.pos}</strong></div>
              </div>
            </div>
          <div class="d-flex flex-wrap justify-content-center gap-4">
            <div><strong>PPG:</strong> ${stats.ppg}</div>
            <div><strong>APG:</strong> ${stats.apg}</div>
            <div><strong>RPG:</strong> ${stats.rpg}</div>
            <div><strong>FG%:</strong> ${stats.fg}</div>
            <div><strong>3P%:</strong> ${stats.tp}</div>
            <div><strong>BPG:</strong> ${stats.bpg}</div>
            <div><strong>SPG:</strong> ${stats.spg}</div>
            <div><strong>TPG:</strong> ${stats.tpg}</div>
          </div>
          <div class="row justify-content-center mt-4"> 
            <div class="form-label text-center w-100"><strong>Notes</strong> ${stats.notes}</div>
          </div>
          <div class="row justify-content-end mt-4"> 
            <div class="col-auto">
                <img class="mods" src="ed.png" id="edit-btn" alt="edit"/> 
                <img class="mods" src="delete.png" id="delete-btn" alt="Delete"/>
            </div>
          </div>
          
        `;

  const editBtn = playerCard.querySelector("#edit-btn");
  const deleteBtn = playerCard.querySelector("#delete-btn");

  editBtn.addEventListener("click", function () {
    form.elements.pname.value = stats.pname;
    form.elements.height.value = stats.height;
    form.elements.pos.value = stats.pos;
    form.elements.num.value = stats.num;
    form.elements.ppg.value = stats.ppg;
    form.elements.apg.value = stats.apg;
    form.elements.rpg.value = stats.rpg;
    form.elements.fg.value = stats.fg;
    form.elements.tp.value = stats.tp;
    form.elements.bpg.value = stats.bpg;
    form.elements.spg.value = stats.spg;
    form.elements.tpg.value = stats.tpg;
    form.elements.notes.value = stats.notes;

    playerCard.remove();
  });

  deleteBtn.addEventListener("click", function () {
    playerCard.remove();
  });

  output.appendChild(playerCard);
  form.reset();
});
