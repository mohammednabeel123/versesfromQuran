const btn = document.querySelector("#new-quote");
const quote = document.querySelector(".Verse");
const person = document.querySelector(".Quran");

// Array of Quran quotes
const quotes = [
  {
    Quran:
      "Allah reassured 'them', “Have no fear! I am with you, hearing and seeing.",
    verse: "Surah Taha, verse 46",
  },
  {
    Quran:
      "O Prophet! Tell the captives in your custody, “If Allah finds goodness in your hearts, He will give you better than what has been taken from you, and forgive you. For Allah is All-Forgiving, Most Merciful.",
    verse: "Surah Al-Anfal, verse 70",
  },
  {
    Quran: "Your Lord has proclaimed, “Call upon Me, I will respond to you...",
    verse: "Surah Ghafir, verse 60",
  },
  {
    Quran:
      "Say, “O My servants who have transgressed against themselves [by sinning], do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Truly He is the All-Forgiving, Most Merciful.”",
    verse: "Surah Az-Zumar, verse 53",
  },
  {
    Quran:
      "Do not falter or grieve, for you will have the upper hand, if you are ˹true˺ believers.",
    verse: "Surah Ali-Imran, verse 139",
  },
  {
    Quran:
      "And ˹remember˺ when your Lord proclaimed, ‘If you are grateful, I will certainly give you more.",
    verse: "Surah Ibrahim, verse 7",
  },
  {
    Quran: "And the next life is certainly far better for you than this one.",
    verse: "Surah Ad-Duhaa, verse 4",
  },
  {
    Quran:
      "Perhaps you dislike something which is good for you and like something which is bad for you. Allah knows and you do not know.",
    verse: "Surah Al-Baqarah, verse 216",
  },
  {
    Quran:
      "And We have certainly made the Qur’an easy for remembrance, so is there any who will remember?",
    verse: "Surah Al-Qamar, verse 17",
  },
  {
    Quran: "But no! Allah is your Guardian, and He is the best Helper.",
    verse: "Surah Ali-'Imran, verse 150",
  },
  {
    Quran: "Surely in the remembrance of Allah do hearts find comfort.",
    verse: "Surah Ar-Ra'd, verse 28",
  },
  {
    Quran: "Allah reassured 'them', “Have no fear! I am with you",
    verse: "Surah Taha, verse 46",
  },

  {
    Quran:
      "And certainly, We shall test you with something of fear, hunger, loss of wealth, lives and fruits, but give glad tidings to As-Saabiroon (the patient). Who, when afflicted with calamity, say: ‘Truly, to Allah we belong and truly, to Him we shall return.",
    verse: "Surah Al-Baqarah, verse 155-156",
  },
  {
    Quran: "Allah does not burden a soul beyond that it can bear",
    verse: "Surah Al-Baqarah, verse 286",
  },
  {
    Quran:
      "He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination",
    verse: "Surah At - Taghabun, verse 3",
  },
  {
    Quran:
      "Who perfected everything which He created and began the creation of man from clay.",
    verse: "Surah As - Sajdah, verse 7",
  },
  {
    Quran:
      "And of His signs is that you see the earth stilled, but when We send down upon it rain, it quivers and grows. Indeed, He who has given it life is the Giver of Life to the dead. Indeed, He is over all things competent.",
    verse: "Surah Fussilat, verse 39",
  },
  {
    Quran:
      "[He is] Creator of the heavens and the earth. He has made for you from yourselves, mates, and among the cattle, mates; He multiplies you thereby. There is nothing like unto Him, and He is the Hearing, the Seeing.",
    verse: "Surah Ash-Shura, verse 11",
  },
  {
    Quran:
      "Here you are, being invited to donate ˹a little˺ in the cause of Allah. Still some of you withhold. And whoever does so, it is only to their own loss. For Allah is the Self-Sufficient, whereas you stand in need ˹of Him˺. If you ˹still˺ turn away, He will replace you with another people. And they will not be like you.",
    verse: "Surah Muhammed, verse 47",
  },
  {
    Quran:
      "Every soul will be paid in full for its deeds, for Allah knows best what they have done.",
    verse: "Surah AZ -Zumar , verse 70",
  },
];

btn.addEventListener("click", function () {
  const randQuote = Math.trunc(Math.random() * quotes.length);
  const randomQuotes = quotes[randQuote];

  quote.innerText = randomQuotes.Quran;
  person.innerText = randomQuotes.verse;
});
