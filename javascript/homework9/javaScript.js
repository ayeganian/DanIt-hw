
const tabsContent = document.querySelectorAll('#tabs-content li');
for (let i=0; i<=tabsContent.length; i++) {
    tabsContent[i].hidden = true;
    tabsContent[0].hidden = false;


    const Akali = document.getElementById('Akali');

    Akali.addEventListener('click', () => {
        const tabsContent = document.querySelectorAll('#tabs-content li');
        for (let i = 0; i <= tabsContent.length; i++) {
            tabsContent[0].hidden = false;
            tabsContent[i].hidden = true;

        }
    });
    const Anivia = document.getElementById('Anivia');

    Anivia.addEventListener('click', () => {
        const tabsContent = document.querySelectorAll('#tabs-content li');
        for (let i = 0; i <= tabsContent.length; i++) {
            tabsContent[1].hidden = false;
            tabsContent[i].hidden = true;

        }
    });
    const Draven = document.getElementById('Draven');

    Draven.addEventListener('click', () => {
        const tabsContent = document.querySelectorAll('#tabs-content li');
        for (let i = 0; i <= tabsContent.length; i++) {
            tabsContent[2].hidden = false;
            tabsContent[i].hidden = true;

        }
    });
    const Garen = document.getElementById('Garen');

    Garen.addEventListener('click', () => {
        const tabsContent = document.querySelectorAll('#tabs-content li');
        for (let i = 0; i <= tabsContent.length; i++) {
            tabsContent[3].hidden = false;
            tabsContent[i].hidden = true;

        }
    });
    const Katarina = document.getElementById('Katarina');

    Katarina.addEventListener('click', () => {
        const tabsContent = document.querySelectorAll('#tabs-content li');
        for (let i = 0; i <= tabsContent.length; i++) {
            tabsContent[4].hidden = false;
            tabsContent[i].hidden = true;

        }
    });
}