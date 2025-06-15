document.addEventListener('DOMContentLoaded', () => {
    console.log("script.js has loaded and is attempting to run!"); // Debugging log


    const bibleVerses = [
        "John 3:16 - \"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.\"",
        "Romans 3:23 - \"for all have sinned and fall short of the glory of God,\"",
        "Romans 6:23 - \"For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.\"",
        "Romans 5:8 - \"But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.\"",
        "1 John 4:8 - \"Whoever does not love does not know God, because God is love.\"",
        "Isaiah 53:6 - \"We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all.\"",
        "Mark 10:45 - \"For even the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.\"",
        "Ephesians 2:8-9 - \"For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.\"",
        "John 1:12 - \"Yet to all who did receive him, to those who believed in his name, he gave the right to become children of God—\"",
        "Titus 3:5 - \"he saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit,\"",
        "Acts 3:19 - \"Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord,\"",
        "Luke 13:3 - \"Unless you repent, you too will all perish.\"",
        "Romans 10:9 - \"If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved.\"",
        "Romans 10:10 - \"For it is with your heart that you believe and are justified, and it is with your mouth that you profess your faith and are saved.\"",
        "Romans 10:13 - \"for, 'Everyone who calls on the name of the Lord will be saved.'\"",
        "Acts 16:31 - \"They replied, 'Believe in the Lord Jesus, and you will be saved—you and your household.'\"",
        "John 5:24 - \"Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life.\"",
        "Revelation 3:20 - \"Here I am! I stand at the door and knock. If anyone hears my voice and opens the door, I will come in and eat with that person, and they with me.\"",
        "Matthew 4:17 - \"From that time on Jesus began to preach, 'Repent, for the kingdom of heaven has come near.'\"",
        "Luke 9:23 - \"Then he said to them all: 'Whoever wants to be my disciple must deny themselves and take up their cross daily and follow me.'\"",
        "John 14:6 - \"Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'\"",
        "Colossians 1:15-17 - \"The Son is the image of the invisible God, the firstborn over all creation. For in him all things were created: things in heaven and on earth, visible and invisible, whether thrones or powers or rulers or authorities; all things have been created through him and for him. He is before all things, and in him all things hold together.\"",
        "Hebrews 9:27-28 - \"Just as people are destined to die once, and after that to face judgment, so Christ was sacrificed once to take away the sins of many; and he will appear a second time, not to bear sin, but to bring salvation to those who are waiting for him.\"",
        "1 Corinthians 15:3-4 - \"For what I received I passed on to you as of first importance: that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures,\"",
        "Philippians 2:9-11 - \"Therefore God exalted him to the highest place and gave him the name that is above every name, that at the name of Jesus every knee should bow, in heaven and on earth and under the earth, and every tongue acknowledge that Jesus Christ is Lord, to the glory of God the Father.\"",
        "John 1:1 - \"In the beginning was the Word, and the Word was with God, and the Word was God.\"",
        "John 1:14 - \"The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth.\"",
        "Isaiah 9:6 - \"For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.\"",
        "Acts 4:12 - \"Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.\"",
        "2 Corinthians 5:21 - \"God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.\"",
        "1 John 5:11-12 - \"And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life.\"",
        "John 10:28 - \"I give them eternal life, and they shall never perish; no one will snatch them out of my hand.\"",
        "Romans 8:1 - \"Therefore, there is now no condemnation for those who are in Christ Jesus,\"",
        "Romans 8:38-39 - \"For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.\"",
        "2 Corinthians 5:17 - \"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!\"",
        "Galatians 2:20 - \"I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.\"",
        "Philippians 1:6 - \"being confident of this, that he who began a good work in you will carry it on to completion until the day of Christ Jesus.\"",
        "John 6:37 - \"All those the Father gives me will come to me, and whoever comes to me I will never drive away.\"",
        "Colossians 2:13-14 - \"When you were dead in your sins and in the uncircumcision of your flesh, God made you alive with Christ. He forgave us all our sins, having canceled the charge of our legal indebtedness, which stood against us and condemned us; he has taken it away, nailing it to the cross.\"",
        "Ephesians 1:7 - \"In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace\"",
        "John 16:8 - \"When he comes, he will prove the world to be in the wrong about sin and righteousness and judgment:\"",
        "John 16:13 - \"But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come.\"",
        "Acts 1:8 - \"But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth.\"",
        "Romans 8:9 - \"You, however, are not in the realm of the flesh but are in the realm of the Spirit, if indeed the Spirit of God lives in you. And if anyone does not have the Spirit of Christ, they do not belong to Christ.\"",
        "Galatians 5:22-23 - \"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.\"",
        "Ephesians 1:13-14 - \"And you also were included in Christ when you heard the message of truth, the gospel of your salvation. When you believed, you were marked in him with a seal, the promised Holy Spirit, who is a deposit guaranteeing our inheritance until we acquire possession of it—to the praise of his glory.\"",
        "Titus 3:5 - \"he saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit,\"",
        "1 Corinthians 2:10 - \"these are the things God has revealed to us by his Spirit. The Spirit searches all things, even the deep things of God.\"",
        "John 14:26 - \"But the Advocate, the Holy Spirit, whom the Father will send in my name, will teach you all things and will remind you of everything I have said to you.\"",
        "Romans 8:26 - \"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.\"",
        "2 Timothy 3:16 - \"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness,\"",
        "Hebrews 4:12 - \"For the word of God is alive and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes of the heart.\"",
        "Psalm 119:105 - \"Your word is a lamp for my feet, a light on my path.\"",
        "Joshua 1:8 - \"Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.\"",
        "Matthew 4:4 - \"Jesus answered, 'It is written: ‘Man shall not live on bread alone, but on every word that comes from the mouth of God.’'\"",
        "Romans 10:17 - \"Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.\"",
        "Isaiah 55:11 - \"so is my word that goes out from my mouth: It will not return to me empty, but will accomplish what I desire and achieve the purpose for which I sent it.\"",
        "John 8:31-32 - \"To the Jews who had believed him, Jesus said, 'If you hold to my teaching, you are really my disciples. Then you will know the truth, and the truth will set you free.'\"",
        "Psalm 19:7 - \"The law of the Lord is perfect, refreshing the soul. The statutes of the Lord are trustworthy, making wise the simple.\"",
        "1 Peter 1:23 - \"For you have been born again, not of perishable seed, but of imperishable, through the living and enduring word of God.\"",
        "Psalm 145:8-9 - \"The Lord is gracious and compassionate, slow to anger and rich in love. The Lord is good to all; he has compassion on all he has made.\"",
        "Jeremiah 29:11 - \"For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.\"",
        "Romans 11:33 - \"Oh, the depth of the riches of the wisdom and knowledge of God! How unsearchable his judgments, and his paths beyond tracing out!\"",
        "Psalm 23:1 - \"The Lord is my shepherd, I lack nothing.\"",
        "Isaiah 40:28 - \"Do you not know? Have you not heard? The Lord is the everlasting God, the Creator of the ends of the earth. He will not grow tired or weary, and his understanding no one can fathom.\"",
        "Deuteronomy 6:4 - \"Hear, O Israel: The Lord our God, the Lord is one.\"",
        "Psalm 90:2 - \"Before the mountains were born or you brought forth the whole world, from everlasting to everlasting you are God.\"",
        "Malachi 3:6 - \"“I the Lord do not change. So you, the descendants of Jacob, are not destroyed.\"",
        "Psalm 103:8 - \"The Lord is compassionate and gracious, slow to anger, abounding in love.\"",
        "James 1:17 - \"Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.\"",
        "Philippians 4:13 - \"I can do all this through him who gives me strength.\"",
        "Romans 8:28 - \"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.\"",
        "Proverbs 3:5-6 - \"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.\"",
        "Isaiah 41:10 - \"So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.\"",
        "Matthew 11:28 - \"Come to me, all you who are weary and burdened, and I will give you rest.\"",
        "John 16:33 - \"“I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.”\"",
        "1 Corinthians 10:13 - \"No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.\"",
        "2 Corinthians 12:9 - \"But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.\"",
        "Hebrews 12:1-2 - \"Therefore, since we are surrounded by such a great cloud of witnesses, let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us, fixing our eyes on Jesus, the pioneer and perfecter of faith. For the joy set before him he endured the cross, scorning its shame, and sat down at the right hand of the throne of God.\"",
        "James 4:7 - \"Submit yourselves, then, to God. Resist the devil, and he will flee from you.\"",
        "Matthew 28:19-20 - \"Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.\"",
        "1 Peter 3:15 - \"But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect,\"",
        "Matthew 5:16 - \"In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.\"",
        "Colossians 3:17 - \"And whatever you do, whether in word or deed, do it all in the name of the Lord Jesus, giving thanks to God the Father through him.\"",
        "Romans 12:1-2 - \"Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship. Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will.\"",
        "Ephesians 4:32 - \"Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.\"",
        "Philippians 2:3-4 - \"Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.\"",
        "Luke 6:31 - \"Do to others as you would have them do to you.\"",
        "Galatians 6:9 - \"Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.\"",
        "James 2:17 - \"In the same way, faith by itself, if it is not accompanied by action, is dead.\"",
        "Hebrews 9:27 - \"Just as people are destined to die once, and after that to face judgment,\"",
        "Revelation 20:15 - \"Anyone whose name was not found written in the book of life was thrown into the lake of fire.\"",
        "Matthew 25:46 - \"Then they will go away to eternal punishment, but the righteous to eternal life.\"",
        "John 3:18 - \"Whoever believes in him is not condemned, but whoever does not believe stands condemned already because they have not believed in the name of God’s one and only Son.\"",
        "2 Peter 3:9 - \"The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.\"",
        "Matthew 7:13-14 - \"“Enter through the narrow gate. For wide is the gate and broad is the road that leads to destruction, and many enter through it. But small is the gate and narrow the road that leads to life, and only a few find it.\"",
        "Luke 16:19-31 - The rich man and Lazarus, emphasizing the permanence of the afterlife.\"",
        "Daniel 12:2 - \"Multitudes who sleep in the dust of the earth will awake: some to everlasting life, others to shame and everlasting contempt.\"",
        "Acts 17:30-31 - \"In the past God overlooked such ignorance, but now he commands all people everywhere to repent. For he has set a day when he will judge the world with justice by the man he has appointed. He has given proof of this to everyone by raising him from the dead.”\"",
        "Revelation 21:4 - \"‘He will wipe every tear from their eyes. There will be no more death’ or mourning or crying or pain, for the old order of things has passed away.”\""
    ];

    const verseTextElement = document.getElementById('verseText');
    const verseReferenceElement = document.getElementById('verseReference');
    const newVerseButton = document.getElementById('newVerseButton');
    const shareButton = document.getElementById('shareButton');

    // Define the regular expression for cleaning citations using RegExp constructor.
    // This method can sometimes be more resilient to subtle parsing issues.
    // Note the double backslashes needed for escaping within a string.
    const citeRegex = new RegExp('\\\\', 'g');

    // Function to display a random verse
    function displayRandomVerse() {
        if (!verseTextElement || !verseReferenceElement) {
            console.error("Error: Could not find verse display elements. Check HTML IDs.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * bibleVerses.length);
        const selectedVerse = bibleVerses[randomIndex];

        // Split the verse and reference
        const parts = selectedVerse.split(' - ');
        if (parts.length >= 2) {
            // Apply the regex to clean the verse text
            verseTextElement.textContent = `"${parts[0].replace(citeRegex, '').trim()}"`;
            // Apply the regex to clean the reference text
            verseReferenceElement.textContent = parts.slice(1).join(' - ').replace(citeRegex, '').trim();
        } else {
            // Fallback if format isn't as expected, and remove citations
            verseTextElement.textContent = `"${selectedVerse.replace(citeRegex, '').trim()}"`;
            verseReferenceElement.textContent = "Unknown Reference";
        }
    }

    // Function to handle sharing (modern web API)
    function shareCurrentVerse() {
        const textToShare = `${verseTextElement.textContent} ${verseReferenceElement.textContent}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Daily Scripture from Buxton Team',
                text: textToShare,
                url: window.location.href
            }).then(() => {
                console.log('Verse shared successfully!');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            alert(`You can copy this verse:\n\n${textToShare}\n\nThen paste it into your favorite messaging app!`);
        }
    }

    // Display a verse when the page first loads
    displayRandomVerse();

    // Event listeners for buttons
    if (newVerseButton) {
        newVerseButton.addEventListener('click', displayRandomVerse);
    } else {
        console.error("Error: New Verse Button not found. Check HTML ID.");
    }
    
    if (shareButton) {
        shareButton.addEventListener('click', shareCurrentVerse);
    } else {
        console.error("Error: Share Button not found. Check HTML ID.");
    }
});
