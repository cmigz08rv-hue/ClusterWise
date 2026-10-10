/* ClusterWise language support (English / Filipino).
   HOW IT WORKS: every visible text on the page is looked up here by its exact English wording. If a match
   exists and Filipino is selected, it is swapped; anything NOT listed stays English. So the test questions,
   answer choices and the saved results picture are never touched. A MutationObserver re-applies this
   whenever script2.js draws a new screen, so more screens are translated just by adding lines to FIL below.
   To review or fix the Filipino, edit only the right-hand side of FIL. Choice is kept in sessionStorage. */
(function () {
  "use strict";
  const KEY = "strandwise_lang";
  const norm = s => s.replace(/[\u2018\u2019]/g, "'").replace(/\s+/g, " ").trim();

  const FIL = {
    /* settings */
    "Settings": "Mga Setting", "Language": "Wika", "Dark mode": "Dark mode",
    /* home */
    "Discover Your Ideal Senior High": "Hanapin ang Iyong Angkop na",
    "here in PCSHS": "sa Senior High dito sa PCSHS",
    "is a free online tool that helps learners of Pasay City South High School (PCSHS) choose a Senior High School strand. Take six short skill tests, one for each strand, plus a quick questionnaire about what you enjoy. ClusterWise shows your skills and your interests side by side, so you can see where they line up.":
      "ay isang libreng online na tool na tumutulong sa mga mag-aaral ng Pasay City South High School (PCSHS) na pumili ng strand sa Senior High School. Sagutan ang anim na maikling skill test, isa para sa bawat strand, kasama ang maikling talatanungan tungkol sa mga bagay na gusto mo. Ipinapakita ng ClusterWise ang iyong kakayahan at interes nang magkatabi, para makita mo kung saan sila nagtutugma.",
    "Start Assessment": "Simulan ang Assessment",
    "How it works": "Paano ito gumagana",
    "Click": "I-click ang",
    "and confirm that you are in Grade 10 or below. After a short notice about choosing a strand, the Assessment Hub opens.":
      "at kumpirmahin na ikaw ay nasa Grade 10 pababa. Pagkatapos ng maikling paalala tungkol sa pagpili ng strand, bubukas ang Assessment Hub.",
    "The hub has six skill tests, one per strand, with 15 multiple-choice questions each (90 in total), plus an Interests questionnaire (30 questions, no right or wrong answers). Take them in any order.":
      "May anim na skill test sa hub, isa bawat strand, na may tig-15 multiple-choice na tanong (90 lahat), kasama ang Interests questionnaire (30 tanong, walang tama o maling sagot). Puwede mo silang sagutan sa kahit anong pagkakasunod-sunod.",
    "Every skill question has one correct answer. Answers are not revealed and a finished part cannot be retaken, so take your time.":
      "Bawat tanong sa skill test ay may isang tamang sagot. Hindi ipinapakita ang mga sagot at hindi na maaaring ulitin ang natapos na bahagi, kaya dahan-dahan lang.",
    "Once all seven parts are done,": "Kapag natapos na ang lahat ng pitong bahagi, mabubuksan ang",
    "See Overall Results": "Tingnan ang Kabuuang Resulta",
    "unlocks.": ".",
    "Your results show your skill score and interest ranking for every strand, one main takeaway from comparing them, and a breakdown of your strengths. Then explore that strand's subjects, skills, and career paths.":
      "Ipinapakita ng iyong resulta ang skill score at ranggo ng interes para sa bawat strand, isang pangunahing aral mula sa paghahambing ng dalawa, at paliwanag ng iyong mga lakas. Pagkatapos, tuklasin ang mga asignatura, kasanayan, at karera ng strand na iyon.",
    "Strands offered at PCSHS": "Mga Strand na Iniaalok sa PCSHS",
    "Not ready for the assessment yet? Open a strand below to see what it actually covers. ClusterWise covers":
      "Hindi pa handa sa assessment? Buksan ang isang strand sa ibaba para makita kung ano talaga ang saklaw nito. Saklaw ng ClusterWise ang",
    "six strands": "anim na strand",
    "at Pasay City South High School (PCSHS), grouped into two tracks.": "sa Pasay City South High School (PCSHS), na hinati sa dalawang track.",
    "Academic tracks": "Mga Akademikong Track", "TechPro tracks": "Mga TechPro Track",
    "Arts, Social Sciences, and Humanities": "Sining, Agham Panlipunan, at Humanidades",
    "Hospitality and Tourism": "Hospitality at Turismo",
    "Information and Communications Technology": "Information and Communications Technology",
    "Industrial Arts": "Industrial Arts",
    "Meet the 6 strands": "Kilalanin ang 6 na strand",
    "Scroll down and tap a card to see its subjects, courses & careers": "Mag-scroll pababa at pindutin ang isang card para makita ang mga asignatura, kurso, at karera nito",
    "Seen enough? Find out which one fits you.": "Sapat na ba? Alamin kung alin ang bagay sa iyo.",
    /* faq */
    "Frequently asked questions": "Madalas na Itanong",
    "Quick answers about how ClusterWise works and what happens to your answers.": "Mabilis na sagot kung paano gumagana ang ClusterWise at kung ano ang nangyayari sa iyong mga sagot.",
    "What is PCSHS ClusterWise?": "Ano ang PCSHS ClusterWise?",
    "PCSHS ClusterWise is a free strand-matching tool for Junior High School learners here in Pasay City South High School. No account is needed. Six skill tests (one per strand) and an interests questionnaire show where your skills and interests line up, so you can see which strand fits you.":
      "Ang PCSHS ClusterWise ay isang libreng tool na tumutulong sa mga mag-aaral ng Junior High School dito sa Pasay City South High School na hanapin ang angkop na strand. Hindi kailangan ng account. Ipinapakita ng anim na skill test (isa bawat strand) at ng interests questionnaire kung saan nagtutugma ang iyong kakayahan at interes, para makita mo kung aling strand ang bagay sa iyo.",
    "Who is it for?": "Para kanino ito?",
    "ClusterWise is made for Junior High School learners at Pasay City South High School (PCSHS), ideally Grade 10, who are deciding which Senior High School strand to take. When you press":
      "Ginawa ang ClusterWise para sa mga mag-aaral ng Junior High School sa Pasay City South High School (PCSHS), mas mainam ang Grade 10, na nagpapasya kung anong strand ng Senior High School ang kukunin. Kapag pinindot mo ang",
    ", you are asked which grade you are in, because the assessment is only for learners in Grade 10 and below. If you choose Grade 11–12, the assessment stays locked in that browser tab.":
      ", tatanungin ka kung anong grade ka, dahil para lang sa mga mag-aaral na nasa Grade 10 pababa ang assessment. Kung pipiliin mo ang Grade 11–12, mananatiling naka-lock ang assessment sa browser tab na iyon.",
    "Can I change my strand later?": "Puwede ko bang palitan ang strand ko mamaya?",
    "No. PCSHS does not allow learners to switch strands. The strand you choose is the one you stay in for Grade 11 and Grade 12, so compare your skills and interests before you decide, and talk with your guidance counselor if you are unsure.":
      "Hindi. Hindi pinapayagan ng PCSHS na magpalit ng strand ang mga mag-aaral. Ang strand na pipiliin mo ang mananatili sa buong Grade 11 at Grade 12, kaya ihambing ang iyong kakayahan at interes bago magpasya, at makipag-usap sa iyong guidance counselor kung hindi ka sigurado.",
    "How long does it take?": "Gaano katagal ito?",
    "There are 90 skill questions (15 per strand) and 30 interest questions, split into seven short parts. Take them in any order, and do one part at a time if you like. Most learners finish in about 45 minutes.":
      "May 90 tanong sa skill test (15 bawat strand) at 30 tanong sa interes, na hinati sa pitong maikling bahagi. Sagutan sa kahit anong pagkakasunod-sunod, at puwede isa-isang bahagi lang. Karamihan ay natatapos sa mga 45 minuto.",
    "Can I stop and continue later?": "Puwede ba akong huminto at magpatuloy mamaya?",
    "Yes, as long as you stay in the same browser tab. Your progress is saved on your device and picks up where you left off, even after a refresh. Closing the tab clears it.":
      "Oo, basta nasa parehong browser tab ka. Naka-save sa device mo ang iyong progress at itutuloy mo kung saan ka huminto, kahit mag-refresh. Mabubura ito kapag isinara ang tab.",
    "Are my answers saved or shared?": "Naka-save ba o ibinabahagi ang aking mga sagot?",
    "No. ClusterWise has no server or database, so nothing is uploaded or shared. Your answers stay on your device. If you use":
      "Hindi. Walang server o database ang ClusterWise, kaya walang ina-upload o ibinabahagi. Nananatili sa device mo ang iyong mga sagot. Kapag ginamit mo ang",
    "Save my results": "I-save ang aking resulta",
    ", the picture is made on your device too.": ", ginagawa rin sa device mo ang larawan.",
    "Why are skills and interests shown separately?": "Bakit magkahiwalay ang kakayahan at interes?",
    "They answer different questions: what you can do right now, and what you enjoy. Mixing them into one score would hide that. Side by side, you can see where they agree and where they point different ways.":
      "Magkaiba ang sagot nila: kung ano ang kaya mo ngayon, at kung ano ang gusto mo. Maitatago iyon kung pagsasamahin sa iisang score. Kapag magkatabi, makikita mo kung saan sila nagkakasundo at kung saan magkaiba ang tinutungo.",
    "Is the result final?": "Pinal na ba ang resulta?",
    "No. ClusterWise is a guide, not a decision. Use your results together with advice from your teachers, guidance counselor, and family.":
      "Hindi. Gabay lang ang ClusterWise, hindi desisyon. Gamitin ang resulta kasama ang payo ng iyong mga guro, guidance counselor, at pamilya.",
    /* notice, loading, common buttons */
    "Your strand shapes your next two years here in PCSHS": "Hinuhubog ng iyong strand ang susunod mong dalawang taon dito sa PCSHS",
    "You choose a strand once, then stay in it for all of Grade 11 and Grade 12. PCSHS does not allow learners to switch strands, so there is no second try.":
      "Minsan ka lang pipili ng strand, at mananatili ka rito sa buong Grade 11 at Grade 12. Hindi pinapayagan ng PCSHS ang pagpapalit ng strand, kaya walang ikalawang pagsubok.",
    "A strand that does not fit your skills and interests can make those two years harder than they need to be, and it can hold you back from what you are capable of. Check where you stand before you commit.":
      "Ang strand na hindi bagay sa iyong kakayahan at interes ay maaaring magpahirap sa dalawang taon na iyon nang higit sa kinakailangan, at puwede kang pigilan sa kaya mo talagang marating. Alamin muna kung nasaan ka bago magpasya.",
    "Continue": "Magpatuloy", "Back": "Bumalik", "Next": "Susunod",
    "Working on your results…": "Inihahanda ang iyong resulta…",
    "Skill tests scored": "Nasuri na ang mga skill test", "Interests ranked": "Naranggo na ang mga interes",
    "Skills and interests compared": "Naihambing na ang kakayahan at interes",
    "Your answers stay on this device": "Nananatili sa device mo ang iyong mga sagot",
    "Questions about your result": "Mga tanong tungkol sa iyong resulta"
  };

  /* ---- stage 2: grade check, hub, pledge, read-first screens, interests flow ---- */
  Object.assign(FIL, {
    "Explore": "Tuklasin ang",
    "Which grade are you in?": "Anong grade ka na?",
    "ClusterWise is made for learners who have not chosen a Senior High School strand yet.": "Ginawa ang ClusterWise para sa mga mag-aaral na hindi pa nakapipili ng strand sa Senior High School.",
    "Your grade level": "Iyong grade level", "Grade 10 or below": "Grade 10 pababa", "Still choosing a strand": "Namimili pa ng strand",
    "Already in a strand": "Nasa strand na",
    "ClusterWise is for Grade 10 and below": "Para sa Grade 10 pababa ang ClusterWise",
    "Learners in Grade 11 and 12 are already in a strand, and PCSHS does not allow switching, so these results could not change anything for you. You can still read about each strand.": "Ang mga mag-aaral sa Grade 11 at 12 ay nasa strand na, at hindi pinapayagan ng PCSHS ang pagpapalit, kaya walang mababago sa iyo ang mga resultang ito. Maaari mo pa ring basahin ang tungkol sa bawat strand.",
    "Explore strands": "Tuklasin ang mga strand",
    /* hub */
    "Choose a test to take": "Pumili ng test na sasagutan", "Before you begin": "Bago ka magsimula",
    "Also complete the": "Sagutan din ang", "Interests": "Interes",
    "Finish all seven parts and": "Tapusin ang lahat ng pitong bahagi, at mabubuksan ang",
    "Each part can only be taken once, and skill answers aren't shown afterward, so take your time.": "Isang beses lang masasagutan ang bawat bahagi, at hindi ipinapakita ang mga sagot sa skill test pagkatapos, kaya dahan-dahan lang.",
    "Honesty is what makes ClusterWise work.": "Katapatan ang nagpapagana sa ClusterWise.",
    "Your result is only as accurate as your answers. If you look up answers, ask a friend, or use AI, the result won't show your real strengths, and it could point you to a strand you'd struggle in for two years. This isn't a graded exam. The only person you'd be fooling is yourself.": "Kasingtumpak lang ng iyong mga sagot ang iyong resulta. Kung maghahanap ka ng sagot, magtatanong sa kaibigan, o gagamit ng AI, hindi ipapakita ng resulta ang tunay mong lakas, at maaari ka nitong ituro sa strand na pahihirapan ka sa loob ng dalawang taon. Hindi ito may-grade na pagsusulit. Ang lolokohin mo lang ay ang sarili mo.",
    "No need to review or prepare. This measures how you think, not what you've memorized.": "Hindi kailangang mag-review o maghanda. Sinusukat nito kung paano ka mag-isip, hindi kung ano ang kabisado mo.",
    "I will answer on my own and honestly.": "Sasagot ako nang mag-isa at nang tapat.",
    "You've pledged to answer honestly.": "Nangako kang sasagot nang tapat.",
    "Tick the box above to unlock the tests.": "Lagyan ng tsek ang kahon sa itaas para mabuksan ang mga test.",
    "Keep this tab open. Your answers are only kept while it stays open, and closing it means starting over.": "Panatilihing bukas ang tab na ito. Nananatili lang ang iyong mga sagot habang bukas ito, at kapag isinara mo ay magsisimula ka ulit.",
    "Completed": "Tapos na",
    "All seven parts are done. Your results are ready.": "Tapos na ang lahat ng pitong bahagi. Handa na ang iyong resulta.",
    "Math & Natural Sciences": "Math at Natural Sciences", "Numerical problem solving and basic science reasoning.": "Paglutas ng problemang may numero at batayang pangangatwirang pang-agham.",
    "Verbal Reading & Logical Fallacies": "Pagbasa at Lohikal na Kamalian", "Reading comprehension and spotting flawed arguments.": "Pag-unawa sa binasa at pagtukoy ng maling argumento.",
    "Quantitative & Financial Reasoning": "Pangangatwirang Numerikal at Pinansyal", "Percentages, interest, profit, and everyday money problems.": "Porsyento, interes, tubo, at pang-araw-araw na problema sa pera.",
    "Logic, Computers & Problem Solving": "Lohika, Kompyuter, at Paglutas ng Problema", "Step-by-step logic, how computers work, and the basics of web pages.": "Lohikang sunud-sunod, kung paano gumagana ang kompyuter, at ang mga batayan ng web page.",
    "Electricity, Machines & Tool Safety": "Kuryente, Makina, at Kaligtasan sa Gamit", "How machines and circuits behave, and safe work habits.": "Kung paano kumikilos ang mga makina at circuit, at ligtas na gawi sa trabaho.",
    "Situational Judgment & Service Recovery": "Pagpapasya sa Sitwasyon at Pag-ayos ng Serbisyo", "Choosing the best response in real service situations.": "Pagpili ng pinakamainam na tugon sa totoong sitwasyon sa serbisyo.",
    "Interests & Preferences": "Mga Interes at Kagustuhan", "What you enjoy doing, with no right or wrong answers.": "Mga bagay na gusto mong gawin, walang tama o maling sagot.",
    /* skill test: read-first + question screen */
    "Read this before you start": "Basahin ito bago magsimula",
    "Choose the best answer. Only one is correct.": "Piliin ang pinakamahusay na sagot. Isa lang ang tama.",
    "Take your time and think each question through.": "Dahan-dahan lang at pag-isipang mabuti ang bawat tanong.",
    "Use": "Gamitin ang", "to change earlier answers before you finish.": "para baguhin ang mga naunang sagot bago ka matapos.",
    "You can leave with": "Puwede kang umalis gamit ang", "Save & back to hub": "I-save at bumalik sa hub", "← Save & back to hub": "← I-save at bumalik sa hub",
    "and continue later. Your answers are kept until you close this tab.": "at magpatuloy mamaya. Mananatili ang iyong mga sagot hanggang isara mo ang tab na ito.",
    "Once you press": "Kapag pinindot mo ang", "Finish test": "Tapusin ang test",
    ", your answers are locked and this test can't be retaken.": ", mala-lock na ang iyong mga sagot at hindi na maaaring ulitin ang test na ito.",
    "Scratch paper is allowed.": "Puwedeng gumamit ng scratch paper.",
    "If a question needs calculating or working out, write it down on paper. That is part of solving it.": "Kung kailangang magkuwenta o magtrabaho sa isang tanong, isulat ito sa papel. Bahagi iyon ng pagsagot.",
    "Answer on your own: no searching, no asking, no AI.": "Sumagot nang mag-isa: bawal mag-search, magtanong, o gumamit ng AI.",
    "Back to hub": "Bumalik sa hub", "Begin test": "Simulan ang test", "Choose the best answer.": "Piliin ang pinakamahusay na sagot.",
    /* interests flow */
    "Interests — Before you begin": "Interes — Bago ka magsimula",
    "This is about what you enjoy, not what you are good at.": "Tungkol ito sa gusto mo, hindi sa magaling ka.",
    "There are no right or wrong answers.": "Walang tama o maling sagot.", "Nothing here is scored as correct.": "Walang bahagi rito na ina-score bilang tama.",
    "Part A:": "Bahagi A:", "Part B:": "Bahagi B:", "Part A": "Bahagi A", "Part B": "Bahagi B",
    "most": "pinakagusto mo", "least": "pinakaayaw mo", "and the one you would want": "at ang", "and one you'd want": "at isang",
    "Pick one activity you'd want": "Pumili ng isang aktibidad na",
    "Answer for yourself, not for what sounds impressive or what others expect of you.": "Sumagot para sa sarili mo, hindi para sa tunog-impresibo o inaasahan ng iba.",
    "to change earlier answers before you finish. You can leave with": "para baguhin ang mga naunang sagot bago ka matapos. Puwede kang umalis gamit ang",
    "and continue later (answers are kept until you close this tab).": "at magpatuloy mamaya (mananatili ang mga sagot hanggang isara mo ang tab).",
    "Finish questionnaire": "Tapusin ang talatanungan", ", your answers are locked and it can't be retaken.": ", mala-lock na ang iyong mga sagot at hindi na ito maaaring ulitin.",
    "Begin": "Simulan", "Interests — Part A complete": "Interes — Tapos na ang Bahagi A",
    "Part A done. Part B works differently.": "Tapos na ang Bahagi A. Iba ang paraan ng Bahagi B.",
    "Each question describes six activities. You can't like everything equally, so choose:": "Bawat tanong ay may anim na aktibidad. Hindi mo magugustuhan ang lahat nang pantay, kaya piliin ang:",
    "Most:": "Pinakagusto:", "the one you would most want to do.": "ang pinakagusto mong gawin.",
    "Least:": "Pinakaayaw:", "the one you would least want to do.": "ang pinakaayaw mong gawin.",
    "Leave the other four unmarked. Pick different activities for most and least.": "Iwanang walang marka ang apat pa. Pumili ng magkaibang aktibidad para sa pinakagusto at pinakaayaw.",
    "Back to Part A": "Bumalik sa Bahagi A", "Start Part B": "Simulan ang Bahagi B",
    "How much does this sound like you? There is no right answer.": "Gaano ito kapareho sa iyo? Walang tamang sagot.",
    "Most": "Pinakagusto", "Least": "Pinakaayaw",
    /* stepper labels */
    "Math & Science": "Math at Science", "Reading": "Pagbasa", "Finance": "Pananalapi", "Logic": "Lohika", "Mechanics": "Mekanika", "Service": "Serbisyo"
  });
  const LAB = { "Math & Science": "Math at Science", "Reading": "Pagbasa", "Finance": "Pananalapi", "Logic": "Lohika", "Mechanics": "Mekanika", "Service": "Serbisyo", "Interests": "Interes" };
  const PATTERNS = [   // text with numbers in it: [regex on the English text, function returning the Filipino]
    [/^(\d+) of (\d+) parts completed$/, m => `${m[1]} sa ${m[2]} bahagi ang natapos`],
    [/^Take the six skill tests in any order\. Each has (\d+) multiple-choice questions \((\d+) in total\)\.$/, m => `Sagutan ang anim na skill test sa kahit anong pagkakasunod-sunod. Bawat isa ay may ${m[1]} multiple-choice na tanong (${m[2]} lahat).`],
    [/^questionnaire \((\d+) questions, no right or wrong answers\)\. It is open from the start\.$/, m => `talatanungan (${m[1]} tanong, walang tama o maling sagot). Bukas ito mula sa simula.`],
    [/^Finish all (\d+) parts to unlock your results\.$/, m => `Tapusin ang lahat ng ${m[1]} bahagi para mabuksan ang iyong resulta.`],
    [/^(\d+) parts? left: (.+)$/, m => `${m[1]} bahagi na lang: ${m[2].split(", ").map(x => LAB[x] || x).join(", ")}.`],
    [/^Start test \((\d+) questions\) \u203A$/, m => `Simulan ang test (${m[1]} tanong) \u203A`],
    [/^Resume test \((\d+) of (\d+) answered\) \u203A$/, m => `Ituloy ang test (${m[1]} sa ${m[2]} ang nasagot) \u203A`],
    [/^Start questionnaire \((\d+) questions\) \u203A$/, m => `Simulan ang talatanungan (${m[1]} tanong) \u203A`],
    [/^Resume \((\d+) of (\d+) answered\) \u203A$/, m => `Ituloy (${m[1]} sa ${m[2]} ang nasagot) \u203A`],
    [/^Continue \((\d+)\)$/, m => `Magpatuloy (${m[1]})`],
    [/^Question (\d+) of (\d+)$/, m => `Tanong ${m[1]} sa ${m[2]}`],
    [/^(\d+) questions \u00B7 one attempt$/, m => `${m[1]} tanong \u00B7 isang beses lang`],
    [/^(\d+) questions \u00B7 two parts \u00B7 one attempt$/, m => `${m[1]} tanong \u00B7 dalawang bahagi \u00B7 isang beses lang`],
    [/^Interests \u2014 Part ([AB]): (\d+) of (\d+)$/, m => `Interes \u2014 Bahagi ${m[1]}: ${m[2]} sa ${m[3]}`],
    [/^(\d+) statements\. Rate how much each one sounds like you, from 1 to 5\.$/, m => `${m[1]} pahayag. I-rate kung gaano ito kapareho sa iyo, mula 1 hanggang 5.`],
    [/^(\d+) short scenarios\. Pick the activity you would want$/, m => `${m[1]} maikling sitwasyon. Pumili ng aktibidad na`]
  ];

  /* ---- stage 3: strand cards (home) and strand pages ----
     Official names (strand codes, subject titles, college courses) stay in English because that is how DepEd,
     CHED and PCSHS call them. Descriptions, skills and headings are in Filipino. A career title is in Filipino
     only where an everyday Filipino word exists (Inhinyero, Abogado...); titles Filipinos usually say in English stay as they are.
     Anything not listed here simply stays in English. */
  Object.assign(FIL, {
    /* strand cards */
    "Academic": "Akademiko",
    "View subjects, courses & careers \u203A": "Tingnan ang mga asignatura, kurso, at karera \u203A",
    "Science, Technology, Engineering & Mathematics": "Agham, Teknolohiya, Inhenyeriya, at Matematika",
    "Business and Management": "Negosyo at Pamamahala",
    /* one-paragraph overviews (card + strand page) */
    "STEM is built for learners who like asking why something works and proving it. Expect heavy math, laboratory science, and a lot of problem sets.":
      "Ang STEM ay para sa mga mag-aaral na mahilig magtanong kung bakit gumagana ang isang bagay at patunayan ito. Asahan ang mabigat na math, laboratory science, at maraming problem set.",
    "ASSH is for learners drawn to people, culture, language, and ideas \u2014 how societies work and how to write and argue well about them.":
      "Ang ASSH ay para sa mga mag-aaral na hilig ang tao, kultura, wika, at mga ideya \u2014 kung paano gumagana ang lipunan at kung paano sumulat at makipagtalo nang mahusay tungkol dito.",
    "BM suits learners curious about how businesses run, how money moves, and how to lead or manage an organization.":
      "Bagay ang BM sa mga mag-aaral na usisero kung paano pinatatakbo ang mga negosyo, kung paano gumagalaw ang pera, at kung paano mamuno o mamahala ng isang organisasyon.",
    "HT is a practical, service-oriented track \u2014 cooking, hotel and restaurant operations, and tourism skills you can apply right away.":
      "Ang HT ay praktikal na track na nakatuon sa serbisyo \u2014 pagluluto, operasyon ng hotel at restawran, at kasanayan sa turismo na magagamit mo agad.",
    "ICT fits learners who like building and fixing digital things \u2014 apps, websites, networks, and systems.":
      "Bagay ang ICT sa mga mag-aaral na mahilig gumawa at mag-ayos ng mga digital na bagay \u2014 app, website, network, at sistema.",
    "IA is a hands-on technical track for learners who like building, wiring, and fixing things with tools and machinery.":
      "Ang IA ay hands-on na technical track para sa mga mag-aaral na mahilig gumawa, mag-wire, at mag-ayos ng mga bagay gamit ang mga kasangkapan at makinarya.",
    /* strand page: video */
    "Watch the recap": "Panoorin ang recap",
    "A quick recap of what STEM learners actually study and build.": "Mabilis na recap ng kung ano talaga ang pinag-aaralan at binubuo ng mga mag-aaral ng STEM.",
    "A quick recap of what ASSH learners read, discuss, and write about.": "Mabilis na recap ng binabasa, pinag-uusapan, at isinusulat ng mga mag-aaral ng ASSH.",
    "A quick recap of how BM learners learn to plan, manage, and grow a business.": "Mabilis na recap kung paano natututong magplano, mamahala, at magpalago ng negosyo ang mga mag-aaral ng BM.",
    "A quick recap of the hands-on service skills HT learners practice.": "Mabilis na recap ng mga hands-on na kasanayan sa serbisyo na pinagsasanayan ng mga mag-aaral ng HT.",
    "A quick recap of what ICT learners build, code, and design.": "Mabilis na recap ng binubuo, kino-code, at dinidisenyo ng mga mag-aaral ng ICT.",
    "A quick recap of the hands-on electrical and technical work IA learners do.": "Mabilis na recap ng hands-on na gawaing elektrikal at teknikal ng mga mag-aaral ng IA.",
    "Video coming soon": "Paparating na ang video",
    "Video looks blurry? YouTube picks the quality automatically. Use the settings (gear) icon in the player and choose a higher quality.":
      "Malabo ba ang video? Awtomatikong pumipili ng quality ang YouTube. Gamitin ang settings (gear) icon sa player at pumili ng mas mataas na quality.",
    "Watch on YouTube": "Panoorin sa YouTube",
    /* strand page: sections */
    "Possible subjects you may take": "Mga asignaturang maaari mong kunin",
    "These are typical for the strand. The subjects PCSHS actually offers can vary by school year.":
      "Karaniwang asignatura ito ng strand. Maaaring magbago kada school year ang aktuwal na asignaturang iniaalok ng PCSHS.",
    "Skills you'll build": "Mga kasanayang malilinang mo",
    "Many college courses accept graduates from any strand, but these are the closest fits.":
      "Maraming kursong pang-kolehiyo ang tumatanggap ng nagtapos mula sa kahit anong strand, pero ito ang pinakaangkop.",
    "College courses": "Mga kursong pang-kolehiyo", "Career fields": "Mga larangan ng karera",
    "The assessment has six short skill tests, one per strand, plus an interests questionnaire, and shows how your results line up with each one.":
      "May anim na maikling skill test ang assessment, isa bawat strand, kasama ang interests questionnaire, at ipinapakita nito kung paano nagtutugma ang iyong resulta sa bawat isa.",
    "Take the Assessment": "Sagutan ang Assessment", "Back to Home": "Bumalik sa Home", "Keep browsing:": "Tingnan din ang iba:",
    /* subject descriptions (the subject titles stay in English) */
    "You work with functions, graphs, and trigonometry, then learn how quantities change using limits and derivatives.":
      "Gagamit ka ng mga function, graph, at trigonometry, saka mo matututuhan kung paano nagbabago ang mga dami gamit ang limits at derivatives.",
    "You study motion, forces, energy, electricity, and waves, and use math to explain how the physical world behaves.":
      "Pag-aaralan mo ang galaw, puwersa, enerhiya, kuryente, at alon, at gagamit ka ng math para ipaliwanag kung paano kumikilos ang pisikal na mundo.",
    "You explore what everything is made of, how substances react, and why, with hands-on lab work.":
      "Susuriin mo kung ano ang bumubuo sa lahat ng bagay, kung paano nagre-react ang mga substance, at bakit, kasama ang hands-on na lab work.",
    "You study living things, from cells and genetics to evolution and ecosystems, and how life systems work.":
      "Pag-aaralan mo ang mga may buhay, mula sa cell at genetics hanggang evolution at ecosystem, at kung paano gumagana ang mga sistema ng buhay.",
    "You plan and carry out your own small investigation, from asking a question to presenting what you found.":
      "Magpaplano at magsasagawa ka ng sarili mong maliit na imbestigasyon, mula sa pagtatanong hanggang sa pagpresenta ng iyong natuklasan.",
    "You write stories, poems, and essays, and learn what makes writing stand out.":
      "Susulat ka ng kuwento, tula, at sanaysay, at malalaman mo kung ano ang nagpapatingkad sa isang akda.",
    "You ask big questions about truth, right and wrong, and how we know what we know.":
      "Magtatanong ka ng malalaking tanong tungkol sa katotohanan, tama at mali, at kung paano natin nalalaman ang alam natin.",
    "You study how people share ideas, and practice speaking, presenting, and reading media critically.":
      "Pag-aaralan mo kung paano nagbabahagi ng ideya ang mga tao, at magsasanay kang magsalita, mag-present, at bumasa ng media nang kritikal.",
    "You learn how governments work, how decisions get made, and how citizens take part.":
      "Malalaman mo kung paano gumagana ang pamahalaan, paano ginagawa ang mga desisyon, at paano nakikilahok ang mga mamamayan.",
    "You get a first look at fields like psychology, sociology, and anthropology.":
      "Masisilip mo ang mga larangan tulad ng psychology, sociology, at anthropology.",
    "You learn the basics of accounting and how a business keeps track of what it earns and spends.":
      "Matututuhan mo ang batayan ng accounting at kung paano binabantayan ng isang negosyo ang kinikita at ginagastos nito.",
    "You learn how businesses raise, manage, and invest money, and how to read financial statements.":
      "Matututuhan mo kung paano nag-iipon, namamahala, at nag-iinvest ng pera ang mga negosyo, at kung paano magbasa ng financial statement.",
    "You study how businesses are organized and led, including planning, teamwork, and decision-making.":
      "Pag-aaralan mo kung paano inaayos at pinamumunuan ang mga negosyo, kasama ang pagpaplano, pagtutulungan, at paggawa ng desisyon.",
    "You use ideas like supply, demand, and cost to understand real business and market situations.":
      "Gagamitin mo ang mga ideya tulad ng supply, demand, at gastos para maunawaan ang totoong sitwasyon sa negosyo at merkado.",
    "You practice the everyday math of business, like percentages, interest, profit, and pricing.":
      "Magsasanay ka sa pang-araw-araw na math ng negosyo, tulad ng porsyento, interes, tubo, at pagpepresyo.",
    "You learn to prepare food, from knife skills and cooking methods to kitchen safety and plating.":
      "Matututo kang maghanda ng pagkain, mula sa paggamit ng kutsilyo at mga paraan ng pagluluto hanggang sa kaligtasan sa kusina at plating.",
    "You practice serving guests in a restaurant: setting tables, taking orders, serving drinks, and handling customers.":
      "Magsasanay kang magsilbi sa mga bisita sa restawran: pag-aayos ng mesa, pagkuha ng order, paghahain ng inumin, at pakikitungo sa mga customer.",
    "You learn how hotels and lodgings keep rooms clean, ready, and comfortable for guests.":
      "Malalaman mo kung paano pinananatiling malinis, handa, at komportable ng mga hotel at tuluyan ang mga kuwarto para sa mga bisita.",
    "You study tourist destinations and learn how places, culture, and attractions are promoted to travelers.":
      "Pag-aaralan mo ang mga destinasyong panturista at kung paano ipinopromote sa mga biyahero ang mga lugar, kultura, at atraksyon.",
    "You learn the basics of caring for children, older adults, and people who need help, with safety and respect first.":
      "Matututuhan mo ang batayan ng pag-aalaga sa mga bata, nakatatanda, at mga taong nangangailangan ng tulong, na laging uuna ang kaligtasan at paggalang.",
    "You learn to write code that tells a computer what to do, starting with logic and simple programs.":
      "Matututo kang magsulat ng code na nag-uutos sa kompyuter kung ano ang gagawin, simula sa lohika at mga simpleng program.",
    "You assemble, install, and troubleshoot computers and networks, and fix common hardware and software problems.":
      "Magbubuo, mag-i-install, at magto-troubleshoot ka ng mga kompyuter at network, at aayusin mo ang karaniwang problema sa hardware at software.",
    "You make moving images, from drawing and storyboarding to bringing characters and scenes to life on a computer.":
      "Gagawa ka ng mga gumagalaw na larawan, mula sa pagguhit at storyboarding hanggang sa pagbibigay-buhay sa mga karakter at eksena sa kompyuter.",
    "You learn to draw precise plans and technical drawings, by hand and with software.":
      "Matututo kang gumuhit ng tumpak na plano at technical drawing, gamit ang kamay at software.",
    "You build websites and apps, designing how they look and coding how they work.":
      "Gagawa ka ng mga website at app: ikaw ang magdidisenyo ng itsura nito at magko-code ng paggana nito.",
    "You learn to install and maintain wiring and electrical systems in homes and buildings, safely.":
      "Matututo kang mag-install at magmantini ng wiring at mga sistemang elektrikal sa mga bahay at gusali, nang ligtas.",
    "You work with the wiring, motors, and controls used in factories and larger buildings.":
      "Gagamit ka ng wiring, motor, at controls na ginagamit sa mga pabrika at mas malalaking gusali.",
    "You learn to spot hazards and keep a workplace safe, including proper gear and procedures.":
      "Matututo kang tumukoy ng panganib at panatilihing ligtas ang lugar ng trabaho, kasama ang tamang kagamitang pangkaligtasan at mga pamamaraan.",
    "You read and make technical drawings for machines and structures, using standard symbols and measurements.":
      "Magbabasa at gagawa ka ng technical drawing para sa mga makina at istruktura, gamit ang karaniwang simbolo at sukat.",
    "You learn how circuits and electronic parts work, and practice building, testing, and repairing simple devices.":
      "Malalaman mo kung paano gumagana ang mga circuit at electronic parts, at magsasanay kang bumuo, sumubok, at mag-ayos ng mga simpleng device.",
    /* skills you'll build */
    "Analytical & logical reasoning": "Pagsusuri at lohikal na pangangatwiran", "Data interpretation": "Pag-interpret ng data",
    "Scientific methodology": "Metodolohiyang pang-agham", "Precision & patience with detail": "Katumpakan at pasensya sa mga detalye",
    "Writing & public speaking": "Pagsulat at pagsasalita sa harap ng madla", "Critical & reflective thinking": "Kritikal at mapagnilay na pag-iisip",
    "Research & interviewing": "Pananaliksik at pakikipanayam", "Empathy & cultural awareness": "Empatiya at kamalayang pangkultura",
    "Budgeting & financial literacy": "Pagba-budget at kaalaman sa pananalapi", "Planning & organizing": "Pagpaplano at pag-oorganisa",
    "Negotiation & leadership": "Pakikipagnegosasyon at pamumuno", "Numerical reasoning": "Pangangatwirang numerikal",
    "Practical service skills": "Praktikal na kasanayan sa serbisyo", "Attention to hygiene & detail": "Atensyon sa kalinisan at detalye",
    "Customer care": "Pag-aalaga sa customer", "Teamwork under pressure": "Pagtutulungan kahit may pressure",
    "Programming & logic building": "Programming at pagbuo ng lohika", "Digital design": "Digital na disenyo", "Systematic thinking": "Sistematikong pag-iisip",
    "Manual dexterity & precision": "Liksi ng kamay at katumpakan", "Practical troubleshooting": "Praktikal na troubleshooting",
    "Safety-conscious work habits": "Ligtas at maingat na gawi sa trabaho", "Tool & equipment handling": "Paghawak ng mga tool at kagamitan",
    /* college courses: official program names stay in English */
    "Engineering (all branches)": "Engineering (lahat ng sangay)"
  });
  /* career titles (used in the "Career fields" list, the typed line and its screen-reader text) */
  const CAREER_FIL = {
    "Engineer": "Inhinyero", "Researcher / Scientist": "Mananaliksik / Siyentipiko", "Doctor": "Doktor", "Architect": "Arkitekto",
    "Teacher / Professor": "Guro / Propesor", "Lawyer": "Abogado", "Journalist": "Mamamahayag", "Psychologist": "Sikologo", "Public Servant": "Lingkod-Bayan",
    "Entrepreneur": "Negosyante", "Chef / Cook": "Chef / Kusinero", "Hotel & Restaurant Staff": "Kawani ng Hotel at Restawran",
    "Electrician": "Elektrisyan", "Electrical Technician": "Teknisyan sa Kuryente", "Industrial Electrician": "Elektrisyan sa Industriya", "Building Technician": "Teknisyan sa Gusali"
  };
  Object.assign(FIL, CAREER_FIL);
  /* the highlighted sentence under "Watch the recap": [text before, highlighted words, text after] per strand */
  const FOCUS_FIL = {
    STEM: ["Malalim na pag-aaral ng likas at pisikal na agham na ", "nakasentro muna sa teorya", ", kasama ang advanced na matematika."],
    ASSH: ["Ang pag-aaral sa ", "pag-uugali ng tao at lipunan", ", komunikasyon, at humanidades."],
    BM: ["Ang batayan ng ", "operasyon ng negosyo at pananalapi", ", at mga gawi sa pamamahala."],
    HT: ["Hands-on na pagsasanay sa ", "pagkain, serbisyo, at hospitality", ", at mga gawaing may kinalaman sa turismo."],
    ICT: ["Praktikal na ", "pagsasanay na nakabatay sa kasanayan", " sa mga sistema ng kompyuter, software, at digital media."],
    IA: ["", "Technical-vocational na pagsasanay", " sa mga sistemang elektrikal, installation, at maintenance."]
  };
  const careerInline = c => CAREER_FIL[c] ? CAREER_FIL[c].toLowerCase() : c;   // Filipino titles go lowercase inside a sentence; English titles keep their capitals
  const typePrefix = name => `Maaaring maging daan ang ${name} para maging `;
  PATTERNS.push(
    [/^Formerly (\w+)$/, m => `Dating ${m[1]}`],
    [/^This video may call (\w+) by its old name, (\w+)\.$/, m => `Maaaring tawagin ng video na ito ang ${m[1]} sa dati nitong pangalan, ang ${m[2]}.`],
    [/^(\w+) strand recap video$/, m => `Recap video ng ${m[1]} strand`],
    [/^Where (\w+) can take you$/, m => `Saan ka madadala ng ${m[1]}`],
    [/^Does (\w+) sound like you\?$/, m => `Tugma ba sa iyo ang ${m[1]}?`],
    [/^(\w+) can take you to becoming$/, m => typePrefix(m[1]).trim()],
    [/^(\w+) can take you to becoming (.+)\.$/, m => {    // screen-reader version of the typed line
      const items = m[2].split(", ").map(x => { return careerInline(x.replace(/^an? /, "")); });
      const last = items.pop();
      return `${typePrefix(m[1])}${items.length ? items.join(", ") + ", o " : ""}${last}.`;
    }]
  );

  const orig = new WeakMap();           // node/element -> original English (so we can switch back)
  const origHTML = new WeakMap();       // .sd-focus-text element -> its original English markup
  const ATTRS = ["aria-label", "title", "placeholder"];
  let lang = "en";
  try { lang = sessionStorage.getItem(KEY) === "fil" ? "fil" : "en"; } catch (e) {}
  const NORM_FIL = {}; Object.keys(FIL).forEach(k => { NORM_FIL[norm(k)] = FIL[k]; });

  function swap(text) {                 // keeps surrounding spaces, returns null if no translation
    const n = norm(text);
    let t = NORM_FIL[n];
    if (t == null) for (const [re, fn] of PATTERNS) { const m = n.match(re); if (m) { t = fn(m); break; } }
    if (t == null) return null;
    return text.match(/^\s*/)[0] + t + text.match(/\s*$/)[0];
  }
  function apply(root) {
    if (lang !== "fil") return;
    (root.querySelectorAll ? root.querySelectorAll(".sd-focus-text") : []).forEach(el => {   // sentence with a highlighted phrase: swapped as a whole
      const sd = el.closest(".sd"), f = sd && FOCUS_FIL[sd.dataset.strand];
      if (!f || origHTML.has(el)) return;
      origHTML.set(el, el.innerHTML);
      el.innerHTML = f[0] + '<span class="sd-focus-hl">' + f[1] + '</span>' + f[2];
    });
    const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) {
      const p = n.parentNode;
      if (!p || /^(SCRIPT|STYLE)$/.test(p.nodeName) || p.closest("[data-no-i18n], .option-text, .q-text, .rate-label, .pick-text")) continue;
      const t = swap(n.nodeValue);
      if (t != null) { if (!orig.has(n)) orig.set(n, n.nodeValue); if (t !== n.nodeValue) n.nodeValue = t; }
    }
    (root.querySelectorAll ? root.querySelectorAll("[aria-label],[title],[placeholder]") : []).forEach(el => {
      if (el.closest("[data-no-i18n], .option-text, .q-text, .rate-label, .pick-text")) return;
      ATTRS.forEach(a => {
        const v = el.getAttribute(a); const t = v && swap(v);
        if (t != null) { const o = orig.get(el) || {}; o[a] = o[a] || v; orig.set(el, o); el.setAttribute(a, t); }
      });
    });
  }
  function restore() {
    document.querySelectorAll(".sd-focus-text").forEach(el => { if (origHTML.has(el)) { el.innerHTML = origHTML.get(el); origHTML.delete(el); } });
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let n = w.nextNode(); n; n = w.nextNode()) if (orig.has(n)) n.nodeValue = orig.get(n);
    document.querySelectorAll("[aria-label],[title],[placeholder]").forEach(el => {
      const o = orig.get(el); if (o) Object.keys(o).forEach(a => el.setAttribute(a, o[a]));
    });
  }

  let busy = false, queued = false;
  const LIVE = ".sd-type, .sd-frame";   // the typed career and the animated picture change on their own all the time; they never need re-translating
  const inLiveArea = n => { const el = n.nodeType === 1 ? n : n.parentElement; return !!(el && el.closest(LIVE)); };
  const obs = new MutationObserver(records => {
    if (busy || queued || lang !== "fil") return;
    if (records.every(r => inLiveArea(r.target))) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; busy = true; obs.disconnect(); apply(document.body); watch(); busy = false; });
  });
  function watch() { obs.observe(document.body, { childList: true, subtree: true, characterData: true }); }

  function setLang(next) {
    lang = next;
    try { sessionStorage.setItem(KEY, lang); } catch (e) {}
    document.documentElement.lang = lang === "fil" ? "fil" : "en";
    obs.disconnect();
    if (lang === "fil") apply(document.body); else restore();
    watch();
    document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    window.dispatchEvent(new Event("cw-langchange"));
  }
  /* used by the typewriter on the strand pages (script2.js), so it types Filipino letter by letter */
  window.CW_i18n = {
    lang: () => lang,
    typePrefix,
    careerWords: careers => careers.map(careerInline),
    career: c => CAREER_FIL[c] || c      /* Filipino title with its capital letter, used by the typed line on the home page */
  };

  /* settings panel (gear in the header): opens/closes with a class so it can animate */
  const btn = document.getElementById("settings-btn"), panel = document.getElementById("settings-panel");
  if (btn && panel) {
    const setOpen = open => { panel.classList.toggle("is-open", open); btn.setAttribute("aria-expanded", String(open)); };
    const close = () => setOpen(false);
    btn.addEventListener("click", e => { e.stopPropagation(); setOpen(!panel.classList.contains("is-open")); });
    document.addEventListener("click", e => { if (panel.classList.contains("is-open") && !panel.contains(e.target)) close(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && panel.classList.contains("is-open")) { close(); btn.focus(); } });
    panel.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
  }
  setLang(lang);
})();
