const controls = {
  childAge: document.querySelector('#childAge'),
  adultAge: document.querySelector('#adultAge'),
  tripDuration: document.querySelector('#tripDuration'),
};

const outputs = Object.fromEntries(
  [...document.querySelectorAll('[data-output]')].map((node) => [node.dataset.output, node])
);

const formatNumber = (value) => {
  if (value >= 10) return value.toFixed(0);
  if (value >= 1) return value.toFixed(1).replace('.0', '');
  return value.toFixed(2);
};

const formatDuration = (hours) => {
  if (hours < 1) return `${Math.round(hours * 60)} min`;

  const wholeHours = Math.floor(hours);
  const minutes = Math.round((hours - wholeHours) * 60);

  if (minutes === 0) return `${wholeHours} h`;
  return `${wholeHours} h ${minutes} min`;
};

const setText = (key, value) => {
  outputs[key].textContent = value;
};

function updateExperience() {
  const childAge = Number(controls.childAge.value);
  const adultAge = Number(controls.adultAge.value);
  const tripDuration = Number(controls.tripDuration.value);

  const childPercent = 100 / childAge;
  const adultPercent = 100 / adultAge;
  const ratio = adultAge / childAge;
  const adultEquivalent = tripDuration * ratio;

  setText('childAge', childAge);
  setText('adultAge', adultAge);
  setText('childPercent', `${formatNumber(childPercent)}%`);
  setText('adultPercent', `${formatNumber(adultPercent)}%`);
  setText('ratio', formatNumber(ratio));
  setText('centerRatio', `${formatNumber(ratio)}x`);
  setText('childAgeCode', `${childAge} ans`);
  setText('adultAgeCode', `${adultAge} ans`);
  setText('ratioCode', `${formatNumber(ratio)} fois`);
  setText('childBarLabel', `${formatNumber(childPercent)}%`);
  setText('adultBarLabel', `${formatNumber(adultPercent)}%`);

  setText('tripHours', formatNumber(tripDuration));
  setText('tripChildAge', `${childAge} ans`);
  setText('tripAdultAge', `${adultAge} ans`);
  setText('tripRealDuration', formatDuration(tripDuration));
  setText('tripAdultEquivalent', formatDuration(adultEquivalent));

  outputs.childFill.style.width = `${Math.min(childPercent, 100)}%`;
  outputs.adultFill.style.width = `${Math.min(adultPercent, 100)}%`;

  const childRing = Math.max(140, Math.min(310, 90 + childPercent * 10));
  const adultRing = Math.max(80, Math.min(250, 70 + adultPercent * 12));
  document.documentElement.style.setProperty('--child-ring', `${childRing}px`);
  document.documentElement.style.setProperty('--adult-ring', `${adultRing}px`);
}

Object.values(controls).forEach((control) => {
  control.addEventListener('input', updateExperience);
});

updateExperience();
