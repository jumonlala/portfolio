
class Card {
    constructor(parent, title, description, techList, github, link) {
        this.parent = parent;
        this.title = title;
        this.description = description;
        this.techList = techList;
        this.github = github;
        this.link = link;
    }
    addCard() {
        let card = document.createElement('div');
        card.classList.add('card', 'mb-3', 'col-4');
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = this.title;
        cardBody.appendChild(cardTitle);

        let cardDescription = document.createElement('p');
        cardDescription.classList.add('card-text');
        cardDescription.textContent = this.description;
        cardBody.appendChild(cardDescription);

        if (this.techList) {
            let techContainer = document.createElement('div');
            techContainer.classList.add('text-white', 'd-flex', 'flex-wrap');
            this.techList.forEach(tech => {
                var techElement = document.createElement("span");
                techElement.classList.add('bg-primary', 'bg-opacity-75', 'rounded', 'p-1', 'px-2', 'mb-1', 'me-1');
                techElement.textContent = tech;
                techContainer.appendChild(techElement);
            });
            cardBody.appendChild(techContainer);
        };

        let cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer', 'bg-transparent', 'text-start');
        
        if (this.github){
            let githubLink = document.createElement('a');
            githubLink.classList.add('text-dark');
            githubLink.target = '_blank';
            githubLink.href = this.github;
            githubLink.innerHTML = '<i class="bi bi-github"></i>';
            cardFooter.appendChild(githubLink);
        };

        if (this.link) {
            let link = document.createElement('a');
            link.classList.add('text-dark');
            link.target = '_blank';
            link.href = this.link;
            link.innerHTML = '<i class="bi bi-link"></i>';
            cardFooter.appendChild(link);
        };

        card.appendChild(cardBody);
        card.appendChild(cardFooter);

        let parent = document.getElementById(this.parent);
        parent.appendChild(card);
    }
}

cardList = []; 
cardList.push(new Card('projects', 'Portfolio Website', 'I built a static portfolio website, employing a mobile-first approach with dynamic, responsive elements for an optimized user experience.', ['JS', 'HTML', 'CSS', 'Bootstrap'], 'https://github.com/jumonlala/portfolio', null));
cardList.push(new Card('projects', 'Stroke Prediction Project', 'This project predicts strokes using logistic regression on a Kaggle healthcare dataset. Data preprocessing is performed, PCA is applied to visualize key features, and model performance is evaluated through accuracy, ROC/AUC scores, and confusion matrix analysis.', ['Scikit-Learn', 'Numpy', 'Pandas', 'Matplotlib'], 'https://github.com/krishaanant/314-Final-Project', null));
cardList.push(new Card('projects', 'Analysis of Uber and Lyft Rides in Boston', 'This project analyzes a dataset of Uber and Lyft rides in Boston to explore patterns in ride characteristics and pricing. The team followed an exploratory data analysis (EDA) approach and found that distance, surge multiplier, and ride type significantly affect price distributions, while temperature does not.', ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn'], 'https://github.com/jumonlala/uber_lyft_in_boston', null));

cardList.push(new Card('blogs', 'Reflection of the Cycle of Socialization', "In 'The Cycle of Socialization,' Bobbie Haro highlights how we are born into identities that shape our societal roles, leading to systemic inequalities and internalized oppression. Recognizing these cycles is essential for fostering intergroup dialogue and challenging societal norms.", null, null, 'https://github.com/jumonlala/cycle_of_socialization'));
cardList.push(new Card('blogs', 'Reflection of Intersectionality', "In 'Intersectionality Revisited,' Patricia Hill Collins and Sirma Bilge emphasize intersectionality as a vital activism tool that highlights the unique struggles faced by individuals with multiple identities. They caution against reducing intersectionality to mere identity categories, stressing its importance in understanding systemic power dynamics.", null, null, 'https://github.com/jumonlala/intersectionality_revisted/blob/main/README.md'));
cardList.push(new Card('blogs', 'Reflection of Five Faces of Oppression', "In 'Five Faces of Oppression,' Iris Marion Young identifies five interconnected conditions of oppression: exploitation, marginalization, powerlessness, cultural imperialism, and violence. While Young emphasizes the importance of recognizing these conditions to understand the experiences of oppressed groups, John McWhorter argues that focusing on terminology can hinder actionable solutions.", null, null, 'https://github.com/jumonlala/five_faces_of_oppression'));
cardList.push(new Card('blogs', 'Analyzing Two-Part and Three-Part Sonata Forms in Mozart’s Piano Sonata No. 1', "Sonata form can be viewed as a two-part form or a three-part form, consisting of exposition, development, and recapitulation. This analysis explores how Mozart’s use of diverse styles, such as counterpoint, chromaticism, and lyrical themes, shapes expectations of each section of both sonata forms in his Piano Sonata No. 1 in C Major (K. 279). ", null, null, 'https://github.com/jumonlala/mozart_sonata_1'));

cardList.forEach(card => {
    card.addCard();
});