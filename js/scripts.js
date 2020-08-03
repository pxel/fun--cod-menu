document.addEventListener("DOMContentLoaded", function(){
    const triggers = document.querySelectorAll('.trigger');
    const panels = document.querySelectorAll('.panel');
    const buttons = document.querySelectorAll('.button');
    const buttonWrapper = document.querySelector('#button-wrapper');
    const panelsWrapper = document.querySelector('#panels-wrapper');
    if(triggers) {
        triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', (e) => {
                let panel = trigger.dataset.panel;
                let targetPanel = document.querySelector('#panel' + panel);
                let panelClasses = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5'];
                panels.forEach(panel => {
                    panel.classList.remove('active');
                })
                panelClasses.forEach(pc => {
                    buttonWrapper.classList.remove(pc);
                })
                buttonWrapper.classList.add('panel' + panel);
                targetPanel.classList.add('active');
            })
        })
    }
});

