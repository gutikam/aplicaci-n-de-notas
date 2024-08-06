document.addEventListener("DOMContentLoaded", function(){
    const noteForm = document.getElementById("note-form");
    const noteInput = document.getElementById("note-input");
    const notesList = document.getElementById("notes-list");

    noteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNote();
    });

    function addNote(){
        const noteText = noteInput.value.trim();
        if(noteText === ""){
            alert("Por favor, escriba una nota.")
            return
        }

        const note = document.createElement("div");
        note.classList.add("note");

        const noteContent = document.createElement("p");
        noteContent.textContent = noteText;
        note.appendChild(noteContent);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", function(){
            notesList.removeChild(note);
        });
        note.appendChild(deleteBtn);
        notesList.appendChild(note);
        noteInput.value = "";
    };
});