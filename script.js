
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

        if (this.github && this.link){
            let spanElement = document.createElement('span');
            spanElement.textContent = " ";
            cardFooter.append(spanElement);
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

var cardList = []; 

cardList.push(new Card('projects', 'Enhancing Algerian Forest Fire Prediction with Machine Learning', "I analyzed the Algerian Forest Fire dataset from Kaggle and addressed two binary classification tasks: identifying the region and determining whether a fire occurred given weather information and fire index measurements. For both problems, I trained K-Nearest Neighbors (KNN) and Support Vector Machine (SVM) models before and after dimension reduction using a Random Forest model.", ['Python'], null, 'resources/cse514_final.pdf'))
cardList.push(new Card('projects', 'Comprehensive Regression Modeling and Statistical Inference on Starcraft Data', "My teammate and I built a statistical model to analyze total hours played by StarCraft players. We focused on statistical inference, applying techniques such as hypothesis testing and nonparametric methods, while also assessing heteroskedasticity, validating the model with permutation tests, and evaluating a mixed-effects model.", ['R'], null, 'resources/sds4211_final.pdf'))

cardList.push(new Card('projects', 'St. Louis Car Crimes Geo-Distribution Analysis', "My teammate and I developed a St. Louis City-specific dashboard with interactive map and charts to visualize car crime hotspots and neighborhood data, aiding in informed decision-making.", ['D3.js', 'Leaflet', 'HTML', 'CSS'], 'https://github.com/csex57/car-crimes', 'https://csex57.github.io/car-crimes/'));
cardList.push(new Card('projects', 'Multivariate Statistical Analysis of Home Run Trends', "My team analyzed home run distance trends using statistical linear models, refined through diagnostic tests and multicollinearity assessments, showcasing transferable expertise in data interpretation for complex datasets.", ['R'], null, 'resources/sds439.pdf'));
cardList.push(new Card('projects', 'Deep Learning-Driven Assessment of iPSC Colony Health from Bright-Field Imaging', "I researched automating quality assessment of induced pluripotent stem cells (iPSCs) by generating synthetic images in Blender to train 50+ models, including YOLOv8, enhancing detection and classification of iPSC characteristics.", ['Pytorch', 'Blender', 'YOLO'], null, 'resources/biosurf_poster.pdf'));
cardList.push(new Card('projects', '2024 Presidential Debate Analysis: Semantic & Sentiment Insights', "I performed a semantic and sentiment analysis of the 2024 presidential debate between candidates Harris and Trump using the Pattern library. The project includes an interactive visualization for exploring sentiment, subjectivity, and certainty in candidates' responses, with filtering options by candidate.", ['Python', 'JS', 'HTML', 'CSS'], 'https://github.com/jumonlala/harris_trump_debate', 'https://jumonlala.github.io/harris_trump_debate/'));
cardList.push(new Card('projects', 'The Cycle of Socialization: A Visual Model', "This project visualizes an individual's journey through the cycle of socialization, where distinct shapes and colors represent diverse identities encountered throughout life. It illustrates how education and self-reflection empower the individual to expand their comfort zone and engage with these identities.", ['JS', 'HTML', 'CSS', 'Bootstrap'], 'https://github.com/jumonlala/cycle-of-socialization', 'https://jumonlala.github.io/cycle-of-socialization/'));
cardList.push(new Card('projects', 'Portfolio Website', 'I built a static portfolio website, employing a mobile-first approach with dynamic, responsive elements for an optimized user experience.', ['JS', 'HTML', 'CSS', 'Bootstrap'], 'https://github.com/jumonlala/portfolio', 'https://jumonlala.github.io/portfolio/'));
cardList.push(new Card('projects', 'Stroke Prediction Project', 'This project predicts strokes using logistic regression on a Kaggle healthcare dataset. Data preprocessing is performed, PCA is applied to visualize key features, and model performance is evaluated through accuracy, ROC/AUC scores, and confusion matrix analysis.', ['Scikit-Learn', 'Numpy', 'Pandas', 'Matplotlib'], 'https://github.com/krishaanant/314-Final-Project', null));
cardList.push(new Card('projects', 'Analysis of Uber and Lyft Rides in Boston', 'This project analyzes a dataset of Uber and Lyft rides in Boston to explore patterns in ride characteristics and pricing. The team followed an exploratory data analysis (EDA) approach and found that distance, surge multiplier, and ride type significantly affect price distributions, while temperature does not.', ['Numpy', 'Pandas', 'Matplotlib', 'Seaborn'], 'https://github.com/jumonlala/uber_lyft_in_boston', null));

cardList.push(new Card('blogs', 'From 2014 to 2025: How the U.S. Bird Flu Crisis Has Evolved', "", null, null, 'resources/eng310_final.pdf'))
cardList.push(new Card('blogs', 'Mechanism Description of the Marble Machine', "", null, null, 'resources/eng310_mechanism.pdf'))
cardList.push(new Card('blogs', 'Between Stereotype and Self: The Role of the Model Minority Myth in Shaping Academic Decisions Among Asian American Students', "", null, null, 'resources/soc3030_final.pdf'))
cardList.push(new Card('blogs', 'Vaccine Hesitancy Among Evangelicals Through the Lens of Secularization Theorists', "", null, null, 'resources/soc329_final.pdf'))

cardList.push(new Card('blogs', 'Rethinking Religion and Identity: Durkheim, Davidman, and the Unsynagogued Jews', "I analyze how Durkheim's theories of religion and collective effervescence intersect with Davidman's study of unsynagogued Jews, exploring how rituals, social pressures, and historical memory shape religious identity outside traditional institutions.", null, null, 'https://github.com/jumonlala/durkheim_unsynagogued_jews'))
cardList.push(new Card('blogs', 'Religion, Economy, and Politics: Weber’s Influence on the Green Family', "I examine how Weber’s theories on religion, economy, and political authority apply to the Green family’s business and ideological practices.", null, null, 'https://github.com/jumonlala/weber_green_family'))
cardList.push(new Card('blogs', 'Religion and Reality: Applying Geertz to Ex-Mormon Narratives', "I explore how Geertz's theories of religion, reality, and cultural systems apply to the experiences of ex-Mormons, particularly in shaping belief, identity, and social dynamics.", null, null, 'https://github.com/jumonlala/geertz_ex_mormon'))
cardList.push(new Card('blogs', 'Religion in Prison: A Lens on Race, Gender, and Social Stratification', "I reflect on the complex relationship between religion and social structures, particularly among female inmates, and illustrate how faith intersects with race, gender, and socioeconomic status, building on Rachel Ellis's work.", null, null, 'https://github.com/jumonlala/religion_in_prison'))
cardList.push(new Card('blogs', 'Questioning Faith: Secularization and the Development of Atheist Identity', "I reflect on how atheist identity is shaped through social interactions, drawing on Jesse Smith’s framework of four developmental stages while considering theories of secularization.", null, null, 'https://github.com/jumonlala/secularization_and_atheist'))

cardList.push(new Card('blogs', 'Reflection on the Cycle of Socialization', "In 'The Cycle of Socialization,' Bobbie Haro highlights how we are born into identities that shape our societal roles, leading to systemic inequalities and internalized oppression. Recognizing these cycles is essential for fostering intergroup dialogue and challenging societal norms.", null, null, 'https://github.com/jumonlala/cycle_of_socialization_writing'));
cardList.push(new Card('blogs', 'Reflection on Intersectionality', "In 'Intersectionality Revisited,' Patricia Hill Collins and Sirma Bilge emphasize intersectionality as a vital activism tool that highlights the unique struggles faced by individuals with multiple identities. They caution against reducing intersectionality to mere identity categories, stressing its importance in understanding systemic power dynamics.", null, null, 'https://github.com/jumonlala/intersectionality_revisted'));
cardList.push(new Card('blogs', 'Reflection on Five Faces of Oppression', "In 'Five Faces of Oppression,' Iris Marion Young identifies five interconnected conditions of oppression: exploitation, marginalization, powerlessness, cultural imperialism, and violence. While Young emphasizes the importance of recognizing these conditions to understand the experiences of oppressed groups, John McWhorter argues that focusing on terminology can hinder actionable solutions.", null, null, 'https://github.com/jumonlala/five_faces_of_oppression'));
cardList.push(new Card('blogs', 'Reflection on the Cycle of Liberation', "In the reflection on Bobbie Harro's 'The Cycle of Liberation' and Allan G. Johnson's work, the importance of understanding systemic oppression is emphasized alongside the need for personal awareness and community involvement in driving social change. By drawing on personal insights, the piece underscores the necessity of visibility and open dialogue to combat injustice and promote a more equitable society.", null, null, "https://github.com/jumonlala/cycle_of_liberation"));
cardList.push(new Card('blogs', "Reflection on Allyship, Visibility, and Empowerment", "In 'The Transformation of Silence into Language and Action,' Audre Lorde urges individuals to confront their fears of visibility and break silences to support marginalized voices. Complementing this, Nancy J. Evans and Jamie Washington in 'Becoming an Ally' highlight that effective allyship involves recognizing systemic oppression, while Gloria E. Anzaldúa in 'Allies' illustrates how shame erodes self-worth and impedes collective resistance.", null, null, "https://github.com/jumonlala/allyship_visibility_empowerment"));
cardList.push(new Card('blogs', 'Analyzing Two-Part and Three-Part Sonata Forms in Mozart’s Piano Sonata No. 1', "Sonata form can be viewed as a two-part form or a three-part form, consisting of exposition, development, and recapitulation. This analysis explores how Mozart’s use of diverse styles, such as counterpoint, chromaticism, and lyrical themes, shapes expectations of each section of both sonata forms in his Piano Sonata No. 1 in C Major (K. 279). ", null, null, 'https://github.com/jumonlala/mozart_sonata_1'));

cardList.forEach(card => {
    card.addCard();
});

class Accordion {
    constructor(parent, title, nickname, link){
        this.parent = parent;
        this.title = title;
        this.nickname = nickname;
        this.link = link;
    }
    addAccordion(){
        let accordion = document.createElement("div");
        accordion.classList.add('accordion-item');
        
        let accordionHeader = document.createElement("h5");
        accordionHeader.classList.add("accordion-header");
        let accordionButton = document.createElement("button");
        accordionButton.classList.add("accordion-button", "collapsed");
        accordionButton.setAttribute("data-bs-toggle", "collapse");
        accordionButton.setAttribute("data-bs-target", "#" + this.nickname + "Collapse");
        accordionButton.setAttribute("type", "button");
        accordionButton.textContent = this.title;

        accordionHeader.appendChild(accordionButton);

        let accordionCollapse = document.createElement("div");
        accordionCollapse.id = this.nickname + "Collapse";
        accordionCollapse.classList.add("accordion-collapse", "collapse");
        accordionCollapse.setAttribute("data-bs-parent", "#" + this.parent);

        let accordionBody = document.createElement("div");
        accordionBody.classList.add("accordion-body");
        
        let accordionVideo = document.createElement("iframe");
        accordionVideo.width = "560"; accordionVideo.height = "315";
        accordionVideo.src = this.link;
        accordionVideo.frameborder = "0";
        accordionVideo.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        accordionVideo.referrerPolicy = "strict-origin-when-cross-origin";
        accordionVideo.allowFullscreen = true;
        
        accordionBody.appendChild(accordionVideo);
        accordionCollapse.appendChild(accordionBody);

        accordion.appendChild(accordionHeader);
        accordion.appendChild(accordionCollapse);

        let parent = document.getElementById(this.parent);
        parent.appendChild(accordion);
    }
}

var accordionList = [];
accordionList.push(new Accordion("music", "Dutilleux Sonatine for Flute and Piano", "dutilleux", "https://www.youtube.com/embed/cTe5og-jGGg?si=jkoPL1I9yPo839mV"));
accordionList.push(new Accordion("music", "Valerie Coleman Danza de la Mariposa", "coleman", "https://www.youtube.com/embed/XXV9g0RVA3M?si=fbJGyzXeArJfA3cX"));
accordionList.push(new Accordion("music", "Liebermann Concerto for Flute and Orchestra III. Presto", "liebermann", "https://www.youtube.com/embed/IukQ-W78Xho?si=a1iaPzs0UL4z2bFa"));
accordionList.push(new Accordion("music", "Prokofiev Flute Sonata in D Major, Op. 94 I. Moderato", "prokofiev", "https://www.youtube.com/embed/QEDPapBq8EI?si=9NLkuQXSok4cYUvz"));
accordionList.push(new Accordion("music", "Borne Carmen Fantasy for Flute and Piano", "borne", "https://www.youtube.com/embed/GXqd2g5yxlg?si=brHv8_hl7zR8cvyr"));
accordionList.push(new Accordion("music", "Chaminade Flute Concerto, Op. 107", "chaminade", "https://www.youtube.com/embed/8f-aRbGXzC4?si=FIkOIs8vG0tNBjM1"));
accordionList.push(new Accordion("music", "Faure Fantasie, Op. 79", "faure", "https://www.youtube.com/embed/IY2VMcT5qCY?si=JO1riEQJgLIPT2Ew"));

accordionList.forEach(accordion => {
    accordion.addAccordion();
})
