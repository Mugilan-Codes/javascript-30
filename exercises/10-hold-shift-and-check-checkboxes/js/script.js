const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (lastChecked !== this && lastChecked !== undefined) {
    if (e.shiftKey && this.checked) {
      checkboxes.forEach((checkbox) => {
        if (checkbox === lastChecked || checkbox === this) {
          inBetween = !inBetween;
        }

        inBetween && (checkbox.checked = true);
      });
    }
  }

  lastChecked = !this.checked ? undefined : this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener('click', handleCheck)
);
