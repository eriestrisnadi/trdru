const prefixGroup = '.input-group',
    prefixMask = prefixGroup + ' .input-mask',
    prefixChild = prefixGroup + ' .input-child',
    prefixComplete = prefixGroup + ' .input-complete';

const elGroup = document.querySelector(prefixGroup),
    elMask = document.querySelector(prefixMask),
    elChild = document.querySelector(prefixChild),
    elComplete = document.querySelector(prefixComplete),
    elToggle = document.querySelector(prefixMask + ' .btn-toggle'),
    elInput = document.querySelector(prefixChild + ' .input-flip'),
    elSubmit = document.querySelector(prefixChild + ' .btn-submit'),
    elThank = document.querySelector(prefixComplete + ' span');

elToggle.addEventListener('click', function() {
    elGroup.classList.toggle('wider');
    elMask.classList.toggle('open');
    elChild.classList.toggle('open');
});

elSubmit.addEventListener('click', function() {
    elGroup.classList.toggle('wider');
    elChild.classList.toggle('open');
    elComplete.classList.toggle('open');
});

elThank.addEventListener('click', function() {
    elInput.value = '';
    elMask.classList.toggle('open');
    elComplete.classList.toggle('open');
});