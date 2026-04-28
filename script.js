const ratesData = {
    EUR: { achat: 10.60, vente: 10.87 },
    USD: { achat: 9.10, vente: 9.37 },
    CAD: { achat: 6.65, vente: 6.95 },
    GBP: { achat: 12.25, vente: 12.80 },
    CHF: { achat: 11.47, vente: 11.95 },
    SAR: { achat: 2.42, vente: 2.60 },
    AED: { achat: 2.459, vente: 2.65 },
    KWD: { achat: 28.50, vente: 31.42 },
    BHD: { achat: 23.00, vente: 25.00 },
    QAR: { achat: 2.46, vente: 2.62 }
};

const faqs = [
    { q: "Where is the currency exchange office?", qFr: "Où se trouve le bureau de change ?", a: "334 Bd 2MARS, Casablanca 20390", aFr: "334 Bd 2MARS, Casablanca 20390" },
    { q: "What is the exchange rate for USD or EUR against Moroccan Dirham today?", qFr: "Quel est le taux de change pour l'USD ou l'EUR contre le Dirham marocain aujourd'hui ?", a: "Our rates are updated daily according to the market. You can check them on our website or when visiting our office.", aFr: "Nos taux sont mis à jour quotidiennement en fonction du marché. Vous pouvez les consulter sur notre site web ou lors de votre visite à notre bureau." },
    { q: "Is there any commission on currency exchange?", qFr: "Y a-t-il une commission sur le change de devises ?", a: "No, the displayed rate is final without any additional commission.", aFr: "Non, le taux affiché est définitif, sans aucune commission supplémentaire." },
    { q: "Are your rates better than banks, hotels, or airports?", qFr: "Vos taux sont-ils meilleurs que ceux des banques, hôtels ou aéroports ?", a: "Yes, our rates are usually more competitive than banks, hotels, and airport exchange offices.", aFr: "Oui, nos taux sont généralement plus compétitifs que ceux des banques, des hôtels et des bureaux de change des aéroports." },
    { q: "Which currencies can I exchange?", qFr: "Quelles devises puis-je échanger ?", a: "We exchange USD, EUR, GBP, SAR, AED, and many other international currencies.", aFr: "Nous échangeons l'USD, l'EUR, la GBP, le SAR, l'AED et de nombreuses autres devises internationales." },
    { q: "Can I exchange small amounts like 20€ or 50$?", qFr: "Puis-je échanger de petits montants comme 20€ ou 50$ ?", a: "Yes, there is no minimum amount for exchange.", aFr: "Oui, il n'y a pas de montant minimum pour le change." },
    { q: "Can I exchange large amounts like 10,000€ or more?", qFr: "Puis-je échanger de gros montants comme 10 000€ ou plus ?", a: "Yes, we provide large amount exchange services transparently and according to Moroccan regulations.", aFr: "Oui, nous proposons des services de change pour de gros montants, en toute transparence et conformément à la réglementation marocaine." },
    { q: "What are your opening hours?", qFr: "Quelles sont vos heures d'ouverture ?", a: "Mon-Fri: 8:30am to 8:30pm | Sat: 8:30am to 6:00pm", aFr: "Du lundi au vendredi : de 8h30 à 20h30 | Samedi : de 8h30 à 18h" },
    { q: "Is your office licensed and legal?", qFr: "Votre bureau est-il agréé et légal ?", a: "Yes, our office is licensed by Bank Al-Maghrib and operates legally and transparently.", aFr: "Oui, notre bureau est agréé par Bank Al-Maghrib et opère de manière légale et transparente." },
    { q: "Do you provide official receipts after each transaction?", qFr: "Fournissez-vous des reçus officiels après chaque transaction ?", a: "Yes, all exchanges are documented with official receipts showing the amount and rate.", aFr: "Oui, tous les échanges sont documentés par des reçus officiels indiquant le montant et le taux." },
    { q: "How can I check the exchange rate before exchanging?", qFr: "Comment puis-je vérifier le taux de change avant d'échanger ?", a: "You can contact us or check the updated rates on our website daily.", aFr: "Vous pouvez nous contacter ou consulter chaque jour les taux actualisés sur notre site web." }
];

const flags = {
    EUR: "🇪🇺", USD: "🇺🇸", CAD: "🇨🇦", GBP: "🇬🇧", CHF: "🇨🇭", 
    SAR: "🇸🇦", AED: "🇦🇪", KWD: "🇰🇼", BHD: "🇧🇭", QAR: "🇶🇦"
};

const translations = {
    fr: {
        nav_home: "Accueil",
        nav_simulator: "Simulateur",
        nav_rates: "Taux de change",
        nav_advantages: "Avantages",
        nav_contact: "Contact",
        badge_text: "Bureau agréé par Bank Al-Maghrib",
        hero_title: "Le Meilleur Taux de Change à Casablanca",
        hero_desc: "“2MARS Exchange”, bureau agréé par Bank Al-Maghrib, vous offre un service rapide, fiable et digital pour l’achat et la vente de devises. Alliant confiance, excellence et innovation, nous plaçons nos clients au cœur de chaque échange.",
        btn_simulate: "Simuler une transaction",
        btn_contact: "Nous contacter",
        sim_title: "Convertisseur de Devises",
        sim_tab_buy: "J'achète des devises",
        sim_tab_sell: "Je vends des devises",
        sim_label_give: "Montant à échanger",
        sim_label_get: "Vous obtenez environ",
        sim_rate_applied: "Taux appliqué :",
        rates_title: "Nos Taux de Change",
        rates_desc: "Nos taux sont régulièrement mis à jour en tenant compte des variations du marché afin de vous proposer des tarifs inégalables.",
        table_currency: "Devise",
        table_buy: "Achat (Nous achetons)",
        table_sell: "Vente (Nous vendons)",
        usp_title: "Pourquoi nous choisir ?",
        usp_1_title: "Taux de change compétitifs et transparents",
        usp_1_desc: "2MARS Exchange propose des taux attractifs pour l’achat et la vente de devises, avec une transparence totale sur les opérations et sans frais cachés.",
        usp_2_title: "Agréé par Bank Al-Maghrib",
        usp_2_desc: "La société garantit des transactions sécurisées et conformes à la réglementation marocaine grâce à son agrément officiel.",
        usp_3_title: "Service rapide et expertise locale",
        usp_3_desc: "Grâce à une équipe expérimentée et un service efficace, 2MARS Exchange accompagne particuliers et professionnels avec réactivité.",
        contact_title: "Infos Pratiques",
        hours_title: "Horaires d'ouverture",
        address_title: "Adresse",
        contact_info_title: "Contacts",
        faq_title: "Questions Fréquentes",
        reviews_title: "Avis de nos clients",
        review_1: "\"Le meilleur taux que j'ai pu trouver à Casablanca ! Le service est très rapide et transparent, je recommande vivement.\"",
        review_2: "\"Professionalisme au top. Aucune commission cachée, j'ai eu exactement le montant affiché sur le site.\"",
        review_3: "\"Excellent accueil. C'est rassurant de passer par un bureau agréé. L'équipe est très sérieuse.\"",
        nav_dotation: "Dotation IR",
        dot_title: "Dotation touristique supplémentaire indexée sur l’IR",
        dot_intro: "Obtenez facilement votre dotation touristique supplémentaire indexée sur l’Impôt sur le Revenu (IR) grâce au service en ligne dédié. Le service « Dotation Touristique Supplémentaire – DTS » vous permet de demander ce complément de dotation en quelques étapes simples, sans complexité administrative.",
        dot_guide_link: "👉 Guide pratique de la dotation touristique",
        dot_how_title: "🧭 Comment utiliser le service ?",
        dot_step1_title: "1. Connexion à la plateforme",
        dot_step1_desc: "Connectez-vous à la plateforme de l’Office des changes et remplissez le formulaire en ligne. Un code unique de demande sera généré automatiquement.",
        dot_step2_title: "2. Validation en agence",
        dot_step2_desc: "Rendez-vous dans un guichet de change muni de :",
        dot_step2_list1: "votre récépissé de demande",
        dot_step2_list2: "une copie de votre pièce d’identité",
        dot_step2_footer: "Cette étape permet l’activation de votre droit à la dotation.",
        dot_step3_title: "Accès au service",
        dot_step3_desc: "Cliquez ici pour accéder au service :",
        dot_step3_btn: "Accéder à la dotation touristique DTS",
        dot_warn_title: "⚠️ Important à savoir",
        dot_warn_1: "Votre validation est obligatoire avant la confirmation du montant du supplément dans le SGD.",
        dot_warn_2: "Une fois validé, le montant devient définitif pour l’année en cours et ne peut plus être modifié ou annulé.",
        dot_special_title: "📄 Cas particulier",
        dot_special_desc1: "Si vous disposez d’une attestation officielle délivrée par une administration marocaine justifiant le montant de l’IR payé pour l’année précédente, vous pouvez vous présenter directement au bureau de change.",
        dot_special_desc2: "Dans ce cas, le calcul de votre dotation supplémentaire sera effectué sur place, sur présentation de ce document.",
        nav_consultation: "Consultation Dotation",
        cons_title: "Consulter votre dotation touristique",
        cons_intro: "Accédez rapidement aux informations relatives à votre dotation touristique en ligne.",
        cons_required: "Les champs marqués d’un * sont obligatoires.",
        cons_req_title: "🧾 Informations requises",
        cons_req_desc: "Veuillez renseigner votre pièce d’identité selon votre situation :",
        cons_req_minor: "<strong>Mineur :</strong> numéro de passeport",
        cons_req_adult: "<strong>Adulte :</strong> numéro de CIN/CNI ou numéro de passeport",
        cons_warn_title: "📌 Remarque",
        cons_warn_desc: "Assurez-vous de saisir des informations exactes afin de faciliter le traitement de votre demande concernant votre dotation touristique.",
        cons_form_title: "📝 Formulaire de contact",
        cons_form_status: "Situation*",
        cons_form_opt_adult: "Adulte",
        cons_form_opt_minor: "Mineur",
        cons_form_email: "Adresse e-mail*",
        cons_form_phone: "Numéro de téléphone*",
        cons_form_msg: "Message (optionnel)",
        cons_form_btn: "Envoyer ma demande",
        cons_form_footer: "Votre demande sera transmise par e-mail à notre bureau et traitée dans un délai maximum de 24 heures.",
        nav_services: "Services",
        nav_reservation: "Réservation de devises",
        res_title: "Réservez vos devises",
        res_intro: "Effectuez votre demande de réservation de devises en ligne en quelques étapes simples.",
        res_required: "Les champs marqués d’un * sont obligatoires.",
        res_req_title: "🧾 Informations requises",
        res_form_name: "Nom complet*",
        res_form_email: "Adresse e-mail*",
        res_form_phone: "Numéro de téléphone*",
        res_form_amount: "Montant souhaité*",
        res_form_currency: "Devise* (ex : EUR)",
        res_form_date: "Date de réservation*",
        res_form_btn: "Réserver mes devises",
        res_form_footer: "Traitement rapide de votre demande selon disponibilité des devises",
        res_steps_title: "Réservez vos devises en 3 étapes",
        res_steps_desc: "Effectuez votre demande de réservation de devises rapidement et en toute simplicité.",
        res_step1_pill: "🧭 Étape 1",
        res_step1_title: "Saisissez vos informations",
        res_step1_desc: "Renseignez vos coordonnées et vos informations personnelles.",
        res_step2_pill: "💰 Étape 2",
        res_step2_title: "Choisissez le montant",
        res_step2_desc: "Indiquez le montant de devises que vous souhaitez réserver.",
        res_step3_pill: "📅 Étape 3",
        res_step3_title: "Sélectionnez la date de retrait",
        res_step3_desc: "Choisissez la date à laquelle vous souhaitez retirer vos devises.",
        res_steps_btn: "Réserver maintenant",
        agences_title: "Nos Agences",
        agences_hero_desc: "Retrouvez-nous dans nos 3 points de vente stratégiques à Casablanca pour tous vos besoins en devises.",
        agence_2mars_title: "Agence 2 Mars",
        agence_2mars_desc: "Siège Social",
        agence_goulmima_title: "Agence Goulmima",
        agence_goulmima_desc: "Quartier Bourgogne",
        agence_taddart_title: "Agence Taddart",
        agence_taddart_desc: "Quartier Taddart",
        agence_btn_maps: "Itinéraire Google Maps",
        cta_agences_title: "Besoin d'un renseignement ?",
        cta_agences_desc: "Contactez notre agence centrale par téléphone ou WhatsApp pour connaître nos taux en temps réel.",
        cta_btn_call: "Appeler le 07 70 18 18 18",
        cta_btn_wa: "Contact WhatsApp"
    },
    en: {
        nav_home: "Home",
        nav_simulator: "Simulator",
        nav_rates: "Exchange Rates",
        nav_advantages: "Advantages",
        nav_contact: "Contact",
        badge_text: "Licensed by Bank Al-Maghrib",
        hero_title: "The Best Exchange Rates in Casablanca",
        hero_desc: "“2MARS Exchange”, licensed by Bank Al-Maghrib, offers you a fast, reliable, and digital service for buying and selling currencies. Combining trust, excellence, and innovation, we place our clients at the heart of every exchange.",
        btn_simulate: "Simulate Transaction",
        btn_contact: "Contact Us",
        sim_title: "Currency Converter",
        sim_tab_buy: "I buy currencies",
        sim_tab_sell: "I sell currencies",
        sim_label_give: "Amount to exchange",
        sim_label_get: "You get approximately",
        sim_rate_applied: "Applied rate:",
        rates_title: "Our Exchange Rates",
        rates_desc: "Our exchange rates are regularly updated taking into account market variations to offer you unbeatable prices.",
        table_currency: "Currency",
        table_buy: "Buy (We buy)",
        table_sell: "Sell (We sell)",
        usp_title: "Why choose us?",
        usp_1_title: "Competitive and transparent rates",
        usp_1_desc: "2MARS Exchange offers attractive rates for buying and selling currencies, with full transparency on operations and no hidden fees.",
        usp_2_title: "Licensed by Bank Al-Maghrib",
        usp_2_desc: "The company guarantees secure transactions compliant with Moroccan regulations thanks to its official license.",
        usp_3_title: "Fast service and local expertise",
        usp_3_desc: "With an experienced team and efficient service, 2MARS Exchange supports individuals and professionals with responsiveness.",
        contact_title: "Practical Info",
        hours_title: "Opening Hours",
        address_title: "Address",
        contact_info_title: "Contacts",
        faq_title: "Frequently Asked Questions",
        reviews_title: "Client Reviews",
        review_1: "\"The best exchange rate I could find in Casablanca! Fast and transparent service, highly recommended.\"",
        review_2: "\"Top professionalism. No hidden commissions, I got exactly the amount shown on the website.\"",
        review_3: "\"Excellent reception. It's reassuring to use a licensed office. The team is very serious.\"",
        nav_dotation: "IR Allowance",
        dot_title: "Supplementary tourist allowance indexed to Income Tax (IR)",
        dot_intro: "Easily obtain your supplementary tourist allowance indexed to Income Tax (IR) through the dedicated online service. The « Supplementary Tourist Allowance – DTS » service allows you to request this allowance top-up in a few simple steps, without administrative complexity.",
        dot_guide_link: "👉 Practical guide to tourist allowance",
        dot_how_title: "🧭 How to use the service?",
        dot_step1_title: "1. Platform connection",
        dot_step1_desc: "Log in to the Exchange Office platform and fill out the online form. A unique request code will be generated automatically.",
        dot_step2_title: "2. Agency validation",
        dot_step2_desc: "Go to an exchange office with:",
        dot_step2_list1: "your request receipt",
        dot_step2_list2: "a copy of your ID",
        dot_step2_footer: "This step allows the activation of your right to the allowance.",
        dot_step3_title: "Access the service",
        dot_step3_desc: "Click here to access the service:",
        dot_step3_btn: "Access DTS tourist allowance",
        dot_warn_title: "⚠️ Important to know",
        dot_warn_1: "Your validation is mandatory before the confirmation of the supplement amount in the SGD.",
        dot_warn_2: "Once validated, the amount becomes final for the current year and cannot be modified or cancelled.",
        dot_special_title: "📄 Special case",
        dot_special_desc1: "If you have an official certificate issued by a Moroccan administration justifying the amount of IR paid for the previous year, you can go directly to the exchange office.",
        dot_special_desc2: "In this case, the calculation of your supplementary allowance will be done on site, upon presentation of this document.",
        nav_consultation: "Allowance Consultation",
        cons_title: "Consult your tourist allowance",
        cons_intro: "Quickly access information regarding your tourist allowance online.",
        cons_required: "Fields marked with an * are mandatory.",
        cons_req_title: "🧾 Required Information",
        cons_req_desc: "Please provide your ID according to your situation:",
        cons_req_minor: "<strong>Minor:</strong> passport number",
        cons_req_adult: "<strong>Adult:</strong> CIN/CNI number or passport number",
        cons_warn_title: "📌 Note",
        cons_warn_desc: "Make sure to enter accurate information to facilitate the processing of your request regarding your tourist allowance.",
        cons_form_title: "📝 Contact Form",
        cons_form_status: "Situation*",
        cons_form_opt_adult: "Adult",
        cons_form_opt_minor: "Minor",
        cons_form_email: "Email address*",
        cons_form_phone: "Phone number*",
        cons_form_msg: "Message (optional)",
        cons_form_btn: "Send my request",
        cons_form_footer: "Your request will be sent by email to our office and processed within a maximum of 24 hours.",
        nav_services: "Services",
        nav_reservation: "Currency Reservation",
        res_title: "Reserve your currencies",
        res_intro: "Make your currency reservation request online in a few simple steps.",
        res_required: "Fields marked with an * are mandatory.",
        res_req_title: "🧾 Required Information",
        res_form_name: "Full name*",
        res_form_email: "Email address*",
        res_form_phone: "Phone number*",
        res_form_amount: "Desired amount*",
        res_form_currency: "Currency* (e.g., EUR)",
        res_form_date: "Reservation date*",
        res_form_btn: "Reserve my currencies",
        res_form_footer: "Fast processing of your request subject to currency availability",
        res_steps_title: "Reserve your currencies in 3 steps",
        res_steps_desc: "Make your currency reservation request quickly and easily.",
        res_step1_pill: "🧭 Step 1",
        res_step1_title: "Enter your information",
        res_step1_desc: "Provide your contact details and personal information.",
        res_step2_pill: "💰 Step 2",
        res_step2_title: "Choose the amount",
        res_step2_desc: "Indicate the amount of currency you wish to reserve.",
        res_step3_pill: "📅 Step 3",
        res_step3_title: "Select the pickup date",
        res_step3_desc: "Choose the date you want to pick up your currencies.",
        res_steps_btn: "Reserve now",
        agences_title: "Our Agencies",
        agences_hero_desc: "Find us in our 3 strategic points of sale in Casablanca for all your currency needs.",
        agence_2mars_title: "2 Mars Agency",
        agence_2mars_desc: "Headquarters",
        agence_goulmima_title: "Goulmima Agency",
        agence_goulmima_desc: "Bourgogne District",
        agence_taddart_title: "Taddart Agency",
        agence_taddart_desc: "Taddart District",
        agence_btn_maps: "Google Maps Directions",
        cta_agences_title: "Need more information?",
        cta_agences_desc: "Contact our central agency by phone or WhatsApp for our real-time rates.",
        cta_btn_call: "Call 07 70 18 18 18",
        cta_btn_wa: "WhatsApp Contact"
    }
};

let currentLang = 'fr';
let simMode = 'buy'; // 'buy' or 'sell'
let currentCurrency = 'EUR';

// DOM Elements
const currencyFromSelect = document.getElementById('currency-from');
const currencyToSelect = document.getElementById('currency-to');
const amountInput = document.getElementById('amount-input');
const amountOutput = document.getElementById('amount-output');
const rateDisplay = document.getElementById('rate-display');
const ratesTableBody = document.getElementById('rates-table-body');
const faqContainer = document.getElementById('faq-container');

// Initialization
function init() {
    if (document.getElementById('amount-input')) {
        populateCurrencies();
        populateRatesTable();
        updateSimulator();
        
        amountInput.addEventListener('input', updateSimulator);
        currencyFromSelect.addEventListener('change', handleCurrencyChange);
        currencyToSelect.addEventListener('change', handleCurrencyChange);
    }
    
    if (document.getElementById('faq-container')) {
        populateFAQs();
    }
    
    setupMobileMenu();
    
    // Set initial language texts safely
    setLang(currentLang);
}

// Populate Currency Selects
function populateCurrencies() {
    const currencies = Object.keys(ratesData);
    
    // In "buy" mode: User gives MAD, gets Currency
    // So From is MAD, To is Currency
    currencyFromSelect.innerHTML = '<option value="MAD">MAD</option>';
    
    currencyToSelect.innerHTML = '';
    currencies.forEach(cur => {
        currencyToSelect.innerHTML += `<option value="${cur}">${cur}</option>`;
    });
    currencyToSelect.value = currentCurrency;
}

// Handle Mode Toggle (Buy/Sell)
function setMode(mode) {
    simMode = mode;
    
    document.getElementById('tab-buy').classList.toggle('active', mode === 'buy');
    document.getElementById('tab-sell').classList.toggle('active', mode === 'sell');
    
    if (mode === 'buy') {
        // User buys currency: gives MAD, gets Currency
        currencyFromSelect.innerHTML = '<option value="MAD">MAD</option>';
        currencyToSelect.innerHTML = Object.keys(ratesData).map(c => `<option value="${c}" ${c === currentCurrency ? 'selected' : ''}>${c}</option>`).join('');
    } else {
        // User sells currency: gives Currency, gets MAD
        currencyFromSelect.innerHTML = Object.keys(ratesData).map(c => `<option value="${c}" ${c === currentCurrency ? 'selected' : ''}>${c}</option>`).join('');
        currencyToSelect.innerHTML = '<option value="MAD">MAD</option>';
    }
    
    updateSimulator();
}

// Handle currency selection change
function handleCurrencyChange(e) {
    if (e.target.value !== 'MAD') {
        currentCurrency = e.target.value;
    }
    updateSimulator();
}

// Update Simulator Calculation
function updateSimulator() {
    const amount = parseFloat(amountInput.value) || 0;
    let rate = 0;
    let result = 0;

    if (simMode === 'buy') {
        // User is buying Devise from Bureau. Bureau Vente.
        // User gives MAD, wants Devise.
        // 1 Devise = Bureau Vente MAD
        // MAD / Rate = Devise
        rate = ratesData[currentCurrency].vente;
        result = amount / rate;
        rateDisplay.textContent = `1 ${currentCurrency} = ${rate.toFixed(2)} MAD`;
    } else {
        // User is selling Devise to Bureau. Bureau Achat.
        // User gives Devise, wants MAD.
        // 1 Devise = Bureau Achat MAD
        // Devise * Rate = MAD
        rate = ratesData[currentCurrency].achat;
        result = amount * rate;
        rateDisplay.textContent = `1 ${currentCurrency} = ${rate.toFixed(2)} MAD`;
    }

    amountOutput.value = result.toFixed(2);
}

// Populate Rates Table
function populateRatesTable() {
    ratesTableBody.innerHTML = '';
    for (const [currency, rates] of Object.entries(ratesData)) {
        ratesTableBody.innerHTML += `
            <tr>
                <td><strong style="display: flex; align-items: center; gap: 0.5rem;"><span style="font-size: 1.5rem;">${flags[currency]}</span> ${currency}</strong></td>
                <td>${rates.achat.toFixed(4)}</td>
                <td>${rates.vente.toFixed(4)}</td>
            </tr>
        `;
    }
}

// Populate FAQs
function populateFAQs() {
    faqContainer.innerHTML = '';
    faqs.forEach((faq, index) => {
        const question = currentLang === 'fr' ? faq.qFr : faq.q;
        const answer = currentLang === 'fr' ? faq.aFr : faq.a;
        
        faqContainer.innerHTML += `
            <div class="faq-item" onclick="toggleFaq(this)">
                <div class="faq-question">
                    ${question}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
                <div class="faq-answer">
                    <p>${answer}</p>
                </div>
            </div>
        `;
    });
}

// Toggle FAQ
function toggleFaq(element) {
    const isActive = element.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
    if (!isActive) {
        element.classList.add('active');
    }
}

// Language Handling
function setLang(lang) {
    currentLang = lang;
    
    // Update active button
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
    
    // Update texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Refresh FAQs to update language
    populateFAQs();
}

// Mobile Menu
function setupMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const header = document.getElementById('header');
    
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent document click from immediate trigger
        header.classList.toggle('nav-active');
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('nav-active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (header.classList.contains('nav-active') && !header.contains(e.target)) {
            header.classList.remove('nav-active');
        }
    });
}

// Run init
init();
