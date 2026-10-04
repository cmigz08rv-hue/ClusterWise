/* =========================================================
   ClusterWise — QUESTION BANK (data only, no logic)
   Loaded BEFORE script2.js. Edit questions here without
   touching the controller.

   SCHEMA
   MODULES[CODE] = {
     title:     shown on the hub card and above each question
     blurb:     one-line description on the hub card
     questions: [
       {
         q:                  the question text (plain text; use \n for line breaks)
         options:            exactly 4 answer strings
         correctAnswerIndex: 0-3, the position of the right answer in `options`
         topic:              short skill label shown as a tag above the question
                             (keep it broad so it does not hint at the method)
       }
     ]
   }

   RULES
   - 15 questions per module (90 total). The controller counts
     questions.length, so a module with a different count still works.
   - The app shuffles what the student sees and still scores against
     correctAnswerIndex of the ORIGINAL order below.
   - Avoid "all of the above" / "none of the above" (shuffling breaks them).
   - Do not type the less-than sign in question text (it is inserted as HTML);
     write "smaller than" instead.
   - No images: flowcharts and schematics are described in text.
   ========================================================= */

/* Order the modules appear in the hub */
const MODULE_ORDER = ["STEM", "ASSH", "BM", "ICT", "IA", "HT"];

const MODULES = {

  /* ---------------------------------------------------------
     STEM — Math & Natural Sciences
     --------------------------------------------------------- */
  STEM: {
    title: "Math & Natural Sciences",
    blurb: "Numerical problem solving and basic science reasoning.",
    questions: [
      {
        q: "A student wants to find out whether sunlight affects how tall bean seedlings grow. She puts 3 seedlings in a sunny window and 3 in a dark closet. All six get the same amount of water, use the same soil, and are in identical pots. After two weeks she measures the height of each seedling.\n\nWhich answer correctly names the independent variable (what she changes) and the dependent variable (what she measures)?",
        options: [
          "Independent: height of the seedlings; dependent: amount of sunlight",
          "Independent: amount of water; dependent: height of the seedlings",
          "Independent: amount of sunlight; dependent: height of the seedlings",
          "Independent: amount of sunlight; dependent: type of soil"
        ],
        correctAnswerIndex: 2,
        topic: "Variables in experiments"
      },
      {
        q: "Kim wants to know whether a plant fertilizer helps tomato plants make more fruit. She gives fertilizer to Plant A and none to Plant B. Plant A grows in a large pot in full sun. Plant B grows in a small pot in shade. Plant A ends up with more tomatoes.\n\nWhy can Kim not conclude that the fertilizer caused the difference?",
        options: [
          "Fertilizer can only be tested on plants that grow in small pots",
          "Pot size and sunlight also differed between the plants, so any of the three could explain the result",
          "Plant B should have received twice as much fertilizer as Plant A",
          "Counting tomatoes is not a valid way to measure how well a plant grows"
        ],
        correctAnswerIndex: 1,
        topic: "Fair tests"
      },
      {
        q: "A potted plant is kept in the dark for 24 hours. Then part of one leaf is covered with foil and the plant is placed in sunlight for several hours. When the leaf is tested with iodine, only the uncovered part turns blue-black.\n\nWhat does this show?",
        options: [
          "Chlorophyll is absent from the covered part of the leaf",
          "Starch is made only in the parts of the leaf that receive light",
          "Water could not reach the covered part of the leaf",
          "The covered part respired faster and used up its starch"
        ],
        correctAnswerIndex: 1,
        topic: "Interpreting an experiment"
      },
      {
        q: "A student sowed 20 seeds at each of four temperatures and counted how many germinated (sprouted) after one week.\n\n10 °C: 4 seeds\n20 °C: 12 seeds\n30 °C: 18 seeds\n40 °C: 6 seeds\n\nWhich conclusion is best supported by these results?",
        options: [
          "Seeds germinate better the warmer it gets",
          "Seeds cannot germinate at 40 °C",
          "Temperature has no effect on germination",
          "Of the four temperatures tested, 30 °C gave the most germination"
        ],
        correctAnswerIndex: 3,
        topic: "Reading data tables"
      },
      {
        q: "Facts: Every atom has protons (positive charge), neutrons (no charge), and electrons (negative charge). A neutral atom has equal numbers of protons and electrons. The mass number is the number of protons plus the number of neutrons.\n\nA neutral sodium atom has 11 protons and 12 neutrons. How many electrons does it have, and what is its mass number?",
        options: [
          "11 electrons; mass number 23",
          "12 electrons; mass number 23",
          "11 electrons; mass number 12",
          "23 electrons; mass number 11"
        ],
        correctAnswerIndex: 0,
        topic: "Atoms"
      },
      {
        q: "Facts: Chloroplasts are where a cell makes food using light. Mitochondria release energy from food for the cell to use. Muscle cells use a great deal of energy.\n\nUnder a microscope, Cell X has many chloroplasts and some mitochondria. Cell Y has no chloroplasts and a very large number of mitochondria. Which match of cell to tissue is most reasonable?",
        options: [
          "X is from a muscle; Y is from a leaf",
          "Both X and Y are from a leaf",
          "X is from a leaf; Y is from a muscle",
          "Both X and Y are from a muscle"
        ],
        correctAnswerIndex: 2,
        topic: "Cells"
      },
      {
        q: "Rule: density = mass ÷ volume. An object floats in water if its density is less than the density of water, which is 1 g/cm³.\n\nA block has a mass of 450 g and a volume of 500 cm³. What happens when it is placed in water?",
        options: [
          "It sinks, because its density is 0.9 g/cm³",
          "It floats, because its density is 0.9 g/cm³",
          "It sinks, because its density is 1.1 g/cm³",
          "It floats, because its density is 1.1 g/cm³"
        ],
        correctAnswerIndex: 1,
        topic: "Mass and volume"
      },
      {
        q: "Pipe A can fill an empty tank in 6 hours. Pipe B alone can fill the same tank in 3 hours. If both pipes run together, how long does it take to fill the empty tank?",
        options: ["4.5 hours", "3 hours", "2 hours", "9 hours"],
        correctAnswerIndex: 2,
        topic: "Rates"
      },
      {
        q: "Average speed is the total distance divided by the total time. A bus travels for 3 hours at 60 km/h, then for 2 hours at 45 km/h. What is its average speed for the whole trip?",
        options: [
          "54 km/h",
          "52.5 km/h",
          "50 km/h",
          "105 km/h"
        ],
        correctAnswerIndex: 0,
        topic: "Word problems"
      },
      {
        q: "A class has 40 students. 60% of them are girls. Of the boys, 25% wear glasses. How many boys wear glasses?",
        options: [
          "10",
          "6",
          "4",
          "16"
        ],
        correctAnswerIndex: 2,
        topic: "Percentages"
      },
      {
        q: "Facts: A cell takes in food and oxygen through its surface and uses them throughout its whole volume. For a cube-shaped cell, surface area = 6 × side × side, and volume = side × side × side.\n\nA cube-shaped cell with sides of 2 µm grows until its sides are 4 µm. Which statement is correct?",
        options: ["Its surface area becomes 8 times larger but its volume becomes 4 times larger, so it has more surface for each unit of volume", "Its surface area and its volume both become 4 times larger, so nothing important changes for the cell", "Its surface area becomes 4 times larger but its volume becomes 8 times larger, so it has less surface for each unit of volume", "Its surface area and its volume both become 2 times larger, because each side has doubled in length"],
        correctAnswerIndex: 2,
        topic: "Scaling"
      },
      {
        q: "A rectangle's length is increased by 20% and its width is decreased by 20%. What happens to its area?",
        options: [
          "It stays the same",
          "It decreases by 4%",
          "It increases by 4%",
          "It decreases by 20%"
        ],
        correctAnswerIndex: 1,
        topic: "Percent change"
      },
      {
        q: "Rule: in a right triangle, the longest side (the hypotenuse) squared equals the sum of the squares of the other two sides.\n\nA rectangular garden is 12 m long and 5 m wide. A straight path runs from one corner to the opposite corner. How long is the path?",
        options: [
          "17 m",
          "7 m",
          "60 m",
          "13 m"
        ],
        correctAnswerIndex: 3,
        topic: "Geometry"
      },
      {
        q: "A ball is rolled down a long ramp and timed. Its distance from the start is recorded:\n\n1 second: 2 m\n2 seconds: 8 m\n3 seconds: 18 m\n\nIf the pattern continues, how far has the ball travelled after 5 seconds?",
        options: ["32 m", "38 m", "50 m", "90 m"],
        correctAnswerIndex: 2,
        topic: "Patterns in data"
      },
      {
        q: "A bag holds 5 red, 3 blue, and 2 green marbles. One marble is drawn at random and not put back. It is red. A second marble is then drawn at random.\n\nWhat is the probability that the second marble is also red?",
        options: [
          "4/9",
          "1/2",
          "5/9",
          "2/5"
        ],
        correctAnswerIndex: 0,
        topic: "Probability"
      }
    ]
  },

  /* ---------------------------------------------------------
     ASSH — Verbal Reading Comprehension & Logical Fallacies
     --------------------------------------------------------- */
  ASSH: {
    title: "Verbal Reading & Logical Fallacies",
    blurb: "Reading comprehension and spotting flawed arguments.",
    questions: [
      {
        q: "A councilor says: \"Dr. Reyes's flood-control plan can't be any good. She once failed to pay a parking fine.\"\n\nWhat is the flaw in this reasoning?",
        options: [
          "It assumes the plan must be good because many people support it",
          "It reaches a general rule from only a few cases",
          "It rejects the plan over an unrelated fact about its proposer",
          "It treats one possible cause as the only possible cause"
        ],
        correctAnswerIndex: 2,
        topic: "Flawed arguments"
      },
      {
        q: "\"Two of my cousins studied Nursing and couldn't find jobs abroad. So a Nursing degree is useless for working overseas.\"\n\nWhat is the flaw in this reasoning?",
        options: [
          "It attacks the cousins instead of the degree",
          "It draws a sweeping conclusion from too few cases",
          "It assumes the degree is good because it is popular",
          "It presents only two possible outcomes"
        ],
        correctAnswerIndex: 1,
        topic: "Flawed arguments"
      },
      {
        q: "\"When the barangay of San Isidro began replanting mangroves along its shoreline, many fishers objected that the trees would crowd the channel and make it harder to launch boats. Five years later, the same fishers report larger catches of crab and small fish, which breed among the roots. The mangroves also slowed the waves during last year's typhoon, and the seawall behind them took far less damage than the unprotected walls in the next barangay. Even so, the fishers still complain about the extra time it takes to steer through the channel, and a few have asked the council to clear part of the mangroves.\"\n\nWhich statement is best supported by the passage?",
        options: ["The fishers now agree that replanting the mangroves was a mistake and want every tree removed", "The mangroves have brought the fishers real benefits, but they have also created a difficulty for them", "The mangroves are the only reason the seawall took less damage than the walls in the next barangay", "The council has already decided to clear part of the mangroves because of the fishers' complaints"],
        correctAnswerIndex: 1,
        topic: "Inference from a passage"
      },
      {
        q: "\"This news site is reliable because it never publishes false stories. And we know it never publishes false stories, because it is such a reliable source.\"\n\nWhat is the flaw in this argument?",
        options: [
          "It treats the site's popularity as proof of quality",
          "It offers only two choices, reliable or unreliable",
          "It attacks the people who criticize the site",
          "It uses its conclusion as its own evidence"
        ],
        correctAnswerIndex: 3,
        topic: "Flawed arguments"
      },
      {
        q: "\"The city's new ban on single-use plastic bags was greeted with predictable outrage. Shoppers complained about the cost of reusable bags, and store owners warned of chaos at the checkout. Yet within three months, bag use at the largest supermarkets had fallen by nearly 80 percent, and the complaints had faded to a murmur. It seems that most people, given a small nudge and a little time, are quite capable of adjusting.\"\n\nWhich statement best describes the writer's attitude toward the early objections?",
        options: ["Fully supportive: the writer thinks the objections were reasonable and should have changed the policy", "Furious: the writer thinks the people who objected should be criticized for complaining at all", "Mildly dismissive: the writer thinks the objections were exaggerated and soon proved unnecessary", "Neutral: the writer reports the objections and the results without giving any hint of an opinion"],
        correctAnswerIndex: 2,
        topic: "Tone and attitude"
      },
      {
        q: "\"Many people assume that memorizing is the opposite of understanding. Yet a student who has memorized the multiplication tables can spend her attention on the harder task of solving word problems. Memorization, in this sense, does not replace understanding; it clears the way for it.\"\n\nWhat is the main idea of the passage?",
        options: [
          "Memorizing basic facts can support deeper understanding instead of blocking it",
          "Understanding matters less than speed, so students should practice recall above all",
          "Memorization should replace problem solving, because facts are easier to test fairly",
          "Word problems are harder than multiplication tables, so students should avoid them"
        ],
        correctAnswerIndex: 0,
        topic: "Main idea"
      },
      {
        q: "\"The ferry to Isla Verde, which normally runs every hour, has been cancelled all week. Vendors on the island say their rice and cooking oil are nearly gone. Fishermen say they cannot get their catch to the mainland market.\"\n\nWhich conclusion is best supported by the passage?",
        options: [
          "The island produces enough food of its own to survive comfortably without the ferry",
          "The island relies on the ferry both for incoming supplies and for outgoing products",
          "The vendors are exaggerating their shortages to try to attract attention to the island",
          "The ferry company plans to close the route permanently because too few ride it"
        ],
        correctAnswerIndex: 1,
        topic: "Drawing conclusions"
      },
      {
        q: "\"Critics call the new night market 'noise, litter, and traffic.' But last year the same street was empty and dark by 7 p.m., and three stores closed. Perhaps the question is not whether a night market is noisy, but whether a silent street is worth what it costs.\"\n\nWhat is the writer's main purpose?",
        options: [
          "To argue that complaints about noise, litter, and traffic are never valid",
          "To describe in detail how the night market operates after dark",
          "To prove that the market caused the three store closures from last year",
          "To ask readers to weigh the market's downsides against the cost of an empty street"
        ],
        correctAnswerIndex: 3,
        topic: "Author's purpose"
      },
      {
        q: "\"Critics called the link between the two studies tenuous: the authors used different methods, different samples, and different years, and the studies shared only one variable.\"\n\nAs used here, the word \"tenuous\" most nearly means:",
        options: [
          "carefully documented",
          "surprisingly strong",
          "weak and thinly supported",
          "widely accepted"
        ],
        correctAnswerIndex: 2,
        topic: "Vocabulary in context"
      },
      {
        q: "A school claims its new reading program raised test scores, because scores rose 12% the year after the program began.\n\nWhich finding would most weaken this claim?",
        options: [
          "Teachers say students enjoy the program and look forward to reading time",
          "The test was replaced that year with a shorter, easier version",
          "Some students in the program scored lower than they did before",
          "The program is also used by many schools in other countries"
        ],
        correctAnswerIndex: 1,
        topic: "Weakening a claim"
      },
      {
        q: "\"Students who eat breakfast every day score higher on tests than students who skip it. So a school breakfast program will raise test scores.\"\n\nWhich finding would most weaken this conclusion?",
        options: ["Many students who eat breakfast say they feel more awake and ready to learn during their morning classes", "The program would cost the school about ₱50,000 a year, which is a large share of its yearly budget", "Breakfast programs are already used in several other countries, where they are popular with parents and teachers", "Students who skip breakfast also tend to sleep less and live farther from school, and both lower test scores too"],
        correctAnswerIndex: 3,
        topic: "Evaluating evidence"
      },
      {
        q: "A principal says that starting school 30 minutes later raised attendance, because attendance rose the following year.\n\nWhich finding would most strengthen this claim?",
        options: [
          "Students say they like the later start and feel more rested in the mornings",
          "Attendance had been rising steadily for several years before the later start was introduced",
          "A similar school that kept its old start time saw no rise in attendance",
          "Many schools in other cities have also moved their start times in recent years"
        ],
        correctAnswerIndex: 2,
        topic: "Strengthening a claim"
      },
      {
        q: "\"Ever since the cafeteria added a salad bar, the school's average test score has gone up. The salad bar is clearly making students smarter.\"\n\nWhat is the flaw in this reasoning?",
        options: [
          "It relies on an expert who has no training in nutrition or teaching",
          "It misrepresents what critics of the salad bar actually claim",
          "It offers only two possible explanations when more exist",
          "It assumes the salad bar caused the rise because it came first"
        ],
        correctAnswerIndex: 3,
        topic: "Flawed arguments"
      },
      {
        q: "\"The city built protected bike lanes on its busiest road. A year later, car traffic on that road had fallen by only 3%. But the number of people cycling to work had tripled, and shops along the road reported more weekday-morning customers.\"\n\nWhich conclusion is best supported by the passage?",
        options: [
          "Most people who now cycle to work used to drive on that road",
          "The lanes were a waste of money, since car traffic hardly fell",
          "The shops gained their new customers only because of the bike lanes",
          "Cycling grew a great deal, but car traffic fell only slightly"
        ],
        correctAnswerIndex: 3,
        topic: "Evidence from a passage"
      },
      {
        q: "A club president argues: \"We should extend the library's closing time from 6 p.m. to 9 p.m., because then more students will use the library.\"\n\nWhich unstated assumption does this argument depend on?",
        options: [
          "Most students already use the library every day before 6 p.m.",
          "Some students would use the library if it stayed open later",
          "The library is the only place in school where students can study",
          "Opening later in the day costs the school no additional money"
        ],
        correctAnswerIndex: 1,
        topic: "Hidden assumptions"
      }
    ]
  },

  /* ---------------------------------------------------------
     BM — Quantitative & Financial Reasoning
     --------------------------------------------------------- */
  BM: {
    title: "Quantitative & Financial Reasoning",
    blurb: "Percentages, interest, profit, and everyday money problems.",
    questions: [
      {
        q: "A store buys a bag for ₱1,200 and marks it up by 40%. During a sale it gives a 25% discount off the marked price. What is the result of selling the bag at the sale price?",
        options: ["₱180 profit", "₱60 profit", "₱60 loss", "No profit and no loss"],
        correctAnswerIndex: 1,
        topic: "Profit and discounts"
      },
      {
        q: "₱20,000 is invested at 5% interest compounded annually. What is its value after 2 years?",
        options: ["₱22,000", "₱22,500", "₱21,000", "₱22,050"],
        correctAnswerIndex: 3,
        topic: "Growth of money"
      },
      {
        q: "A print shop spends ₱60,000 on a new machine. It cuts the cost of printing from ₱2.50 to ₱1.50 per page. The shop prints 8,000 pages a month. How many months until the savings have paid for the machine?",
        options: ["3 months", "5 months", "7.5 months", "12 months"],
        correctAnswerIndex: 2,
        topic: "Payback time"
      },
      {
        q: "A bakery has fixed costs of ₱30,000 per month. Each loaf costs ₱18 to make and sells for ₱30. How many loaves must it sell in a month to break even?",
        options: ["2,500 loaves", "1,667 loaves", "1,000 loaves", "3,000 loaves"],
        correctAnswerIndex: 0,
        topic: "Costs and revenue"
      },
      {
        q: "A subject's final grade is 50% exams, 30% projects, and 20% quizzes. A student scores 80 on exams, 90 on projects, and 70 on quizzes. What is the final grade?",
        options: ["80", "83", "81", "85"],
        correctAnswerIndex: 2,
        topic: "Computing a grade"
      },
      {
        q: "Ben invests ₱15,000 and Carla invests ₱25,000 in a small business. They share profits in proportion to what each invested. If the profit is ₱12,000, how much does Ben receive?",
        options: ["₱6,000", "₱4,500", "₱7,500", "₱5,000"],
        correctAnswerIndex: 1,
        topic: "Ratio and proportion"
      },
      {
        q: "A shop gives a 20% discount, then an additional 10% discount on the reduced price. This is equivalent to a single discount of:",
        options: ["30%", "25%", "28%", "27%"],
        correctAnswerIndex: 2,
        topic: "Discounts"
      },
      {
        q: "A phone costs ₱25,000 new and loses 20% of its current value every year. What is its value after 2 years?",
        options: ["₱15,000", "₱17,500", "₱20,000", "₱16,000"],
        correctAnswerIndex: 3,
        topic: "Value over time"
      },
      {
        q: "Which of these drinks has the lowest cost per milliliter?",
        options: [
          "Brand Z: 500 ml for ₱55",
          "Brand X: 750 ml for ₱90",
          "Brand Y: 1.2 L for ₱138",
          "Brand W: 2 L for ₱250"
        ],
        correctAnswerIndex: 0,
        topic: "Comparing prices"
      },
      {
        q: "A small business starts the month with ₱50,000 in cash. During the month it collects ₱80,000 in sales, pays ₱35,000 for supplies and ₱20,000 in salaries, and the owner withdraws ₱10,000 for personal use. What is the ending cash balance?",
        options: ["₱75,000", "₱65,000", "₱55,000", "₱95,000"],
        correctAnswerIndex: 1,
        topic: "Tracking cash"
      },
      {
        q: "During a sale, a jacket is marked down by 20% and now costs ₱840. What was its original price?",
        options: ["₱1,008", "₱1,260", "₱1,050", "₱672"],
        correctAnswerIndex: 2,
        topic: "Reverse percentages"
      },
      {
        q: "A ₱24,000 laptop can be bought in cash with a 10% discount, or on 12 monthly payments of ₱2,100. How much more does the installment plan cost than paying in cash?",
        options: [
          "₱1,200",
          "₱3,600",
          "₱2,400",
          "₱1,800"
        ],
        correctAnswerIndex: 1,
        topic: "Comparing payment plans"
      },
      {
        q: "Mario borrows ₱8,000 at 1.5% simple interest per month for 6 months. Simple interest is charged only on the original amount borrowed.\n\nHow much does he repay in total?",
        options: [
          "₱8,120",
          "₱8,748",
          "₱9,200",
          "₱8,720"
        ],
        correctAnswerIndex: 3,
        topic: "Loans and interest"
      },
      {
        q: "The price of rice rises from ₱48 to ₱54 per kilo. What is the percent increase?",
        options: [
          "6%",
          "11.1%",
          "12%",
          "12.5%"
        ],
        correctAnswerIndex: 3,
        topic: "Price changes"
      },
      {
        q: "Shop X sells a shirt at ₱90 and offers \"Buy 2, get 1 free\". Shop Y sells the same shirt at ₱90 and gives 30% off every shirt. Mia wants exactly 3 shirts. Which shop is cheaper, and by how much?",
        options: ["Shop Y, by ₱27", "Shop Y, by ₱9", "Shop X, by ₱27", "Shop X, by ₱9"],
        correctAnswerIndex: 3,
        topic: "Comparing offers"
      }
    ]
  },

  /* ---------------------------------------------------------
     ICT — Logic, Computers & Problem Solving
     --------------------------------------------------------- */
  ICT: {
    title: "Logic, Computers & Problem Solving",
    blurb: "Step-by-step logic, basic hardware and software, and reading simple code.",
    questions: [
      {
        q: "Follow these steps in order:\n\n1. Start with 6\n2. Double it\n3. Subtract 5\n4. Add the original starting number\n\nWhat is the result?",
        options: ["18", "13", "7", "19"],
        correctAnswerIndex: 1,
        topic: "Following instructions"
      },
      {
        q: "A canteen app checks discounts in this order:\n\nRule 1: If the student is a member, the discount is 10%.\nRule 2: Otherwise, if the order is 200 pesos or more, the discount is 5%.\nRule 3: Otherwise, there is no discount.\n\nMia is not a member and orders 250 pesos. What discount does she get?",
        options: ["10%", "15%", "0%", "5%"],
        correctAnswerIndex: 3,
        topic: "Following rules"
      },
      {
        q: "A program prints this pattern:\n\n2, 5, 11, 23, ...\n\nWhat number comes next?",
        options: ["47", "46", "35", "29"],
        correctAnswerIndex: 0,
        topic: "Pattern recognition"
      },
      {
        q: "A login flowchart reads:\n\nSTART → set attempts = 0\n→ ask for a password\n→ Is it correct?\n     YES: show \"Welcome\" → END\n     NO: add 1 to attempts\n          → Is attempts equal to 3?\n               YES: lock the account → END\n               NO: go back to \"ask for a password\"\n\nA user types a wrong password every time. How many times is the user asked for a password before the account is locked?",
        options: ["2", "4", "3", "5"],
        correctAnswerIndex: 2,
        topic: "Reading a flowchart"
      },
      {
        q: "A program starts with a = 1 and b = 2. It then repeats these three steps, in order, 3 times:\n\n1. temp = a\n2. a = b\n3. b = temp + b\n\nWhat are the values of a and b at the end?",
        options: ["a = 3, b = 5", "a = 8, b = 13", "a = 5, b = 8", "a = 5, b = 13"],
        correctAnswerIndex: 2,
        topic: "Tracing variables"
      },
      {
        q: "A student's computer runs very slowly when many programs are open at the same time. Files open and save normally, and the hard drive has plenty of free space. Which upgrade would most likely help?",
        options: [
          "Adding more RAM to the computer",
          "Replacing the hard drive with a larger one",
          "Replacing the power supply with a stronger one",
          "Using a monitor with a higher resolution"
        ],
        correctAnswerIndex: 0,
        topic: "Hardware and performance"
      },
      {
        q: "A program goes through the numbers 1 to 15. For each number n it follows these rules in order:\n\nRule 1: If n is divisible by both 3 and 5, print \"FizzBuzz\".\nRule 2: Otherwise, if n is divisible by 3, print \"Fizz\".\nRule 3: Otherwise, if n is divisible by 5, print \"Buzz\".\nRule 4: Otherwise, print n itself.\n\nHow many of the 15 printed lines are exactly the word \"Fizz\"?",
        options: ["3", "4", "5", "6"],
        correctAnswerIndex: 1,
        topic: "Following rules in order"
      },
      {
        q: "A game picks a secret whole number from 1 to 100. After each guess, it only says \"higher\" or \"lower\". The best strategy is to always guess the middle of the numbers that are still possible, which cuts the remaining possibilities roughly in half each time.\n\nAt most how many guesses does this strategy need to be certain of finding the number?",
        options: ["5", "10", "50", "7"],
        correctAnswerIndex: 3,
        topic: "Efficiency"
      },
      {
        q: "A robot on a grid starts facing north. Its commands are:\n\nF = move one square forward\nR = turn 90° to the right\nL = turn 90° to the left\n\nIt follows this program: F, F, R, F\n\nWhere does the robot end up?",
        options: [
          "Facing east, 2 squares north and 1 square east of the start",
          "Facing east, 1 square north and 2 squares east of the start",
          "Facing north, 2 squares north and 1 square east of the start",
          "Facing west, 2 squares north and 1 square west of the start"
        ],
        correctAnswerIndex: 0,
        topic: "Tracing a program"
      },
      {
        q: "A program finds the biggest number in a list. It sets biggest to the first number, then goes through the rest of the list. If a number is bigger than biggest, it replaces biggest with that number.\n\nThe list is: 7, 3, 12, 9, 12, 5\n\nHow many times is biggest replaced, not counting the first time it was set?",
        options: ["2", "3", "4", "1"],
        correctAnswerIndex: 3,
        topic: "Tracing an algorithm"
      },
      {
        q: "The alarm sounds if the door is open AND the system is armed, OR if the panic button is pressed.\n\nIn which situation does the alarm sound?",
        options: [
          "Door open, system not armed, no panic button",
          "Door closed, system armed, no panic button",
          "Door open, system armed, no panic button",
          "Door closed, system not armed, no panic button"
        ],
        correctAnswerIndex: 2,
        topic: "Logic rules"
      },
      {
        q: "A program sets total = 0, then goes through the numbers 1 to 5 in order. If a number is odd, it adds that number to total. Otherwise, it subtracts 1 from total.\n\nWhat is the final total?",
        options: [
          "9",
          "2",
          "8",
          "7"
        ],
        correctAnswerIndex: 3,
        topic: "Tracing a loop"
      },
      {
        q: "In binary, the places from right to left are worth 1, 2, 4, 8, and so on. A digit of 1 means that place is counted, and a 0 means it is not.\n\nWhat is the binary number 1101 in ordinary (decimal) numbers?",
        options: [
          "11",
          "13",
          "15",
          "9"
        ],
        correctAnswerIndex: 1,
        topic: "Number systems"
      },
      {
        q: "A sorting program goes through a list from left to right, comparing each pair of neighbors. If the left number is bigger than the right number, it swaps them. It makes one full pass this way.\n\nThe list is: 7, 3, 9, 1\n\nWhat does the list look like after the one pass?",
        options: [
          "1, 3, 7, 9",
          "3, 7, 1, 9",
          "3, 7, 9, 1",
          "1, 7, 3, 9"
        ],
        correctAnswerIndex: 1,
        topic: "Following a procedure"
      },
      {
        q: "A program is meant to add the numbers from 1 to 5. It sets total = 0, then repeats the following for each number n from 1 to 4: total = total + n. When run, it prints 10 instead of the expected 15.\n\nWhat is the most likely error?",
        options: [
          "The loop stops at 4 instead of including 5",
          "The total should start at 1 instead of 0",
          "The program adds each number twice",
          "The program should multiply instead of add"
        ],
        correctAnswerIndex: 0,
        topic: "Finding a bug"
      }
    ]
  },

  /* ---------------------------------------------------------
     IA — Mechanical Logic, Tool Safety & Schematic Analysis
     --------------------------------------------------------- */
  IA: {
    title: "Mechanical Logic, Tool Safety & Schematics",
    blurb: "How machines and circuits behave, and safe work habits.",
    questions: [
      {
        q: "Two gears are meshed (their teeth interlock). Because they interlock, the same number of teeth pass the contact point on each gear. The small gear has 12 teeth and the large gear has 36 teeth.\n\nThe small gear makes 3 full turns. How many full turns does the large gear make?",
        options: [
          "9 turns",
          "3 turns",
          "1 turn",
          "6 turns"
        ],
        correctAnswerIndex: 2,
        topic: "Gears"
      },
      {
        q: "Rules: When two gears mesh, they turn in opposite directions, and the same number of teeth pass the contact point on each gear.\n\nThree gears are in a row. Gear A (20 teeth) meshes with gear B (40 teeth), and gear B meshes with gear C (10 teeth). Gear A turns clockwise.\n\nWhich way does gear C turn, and how many turns does it make for each full turn of gear A?",
        options: ["Counterclockwise; 2 turns", "Clockwise; 0.5 turns", "Clockwise; 2 turns", "Counterclockwise; 0.5 turns"],
        correctAnswerIndex: 2,
        topic: "Gear trains"
      },
      {
        q: "Rules: power (watts) = voltage (volts) × current (amps). Energy (watt-hours) = power (watts) × time (hours).\n\nA 12 V lamp draws 2 A and is left on for 5 hours. How much energy does it use?",
        options: [
          "24 Wh",
          "60 Wh",
          "70 Wh",
          "120 Wh"
        ],
        correctAnswerIndex: 3,
        topic: "Simple electricity"
      },
      {
        q: "In the water-pipe picture of a circuit, the battery is a pump, the wires are pipes, the current is the flow of water, and a resistor is a narrow section of pipe.\n\nA pump pushes water around a loop that has one narrow section. A second, identical narrow section is added in line with the first, so all the water must pass through both. The pump is unchanged.\n\nWhat happens to the flow, and what does this suggest for a circuit where a second identical resistor is added in series?",
        options: [
          "The flow increases; the current in the circuit increases",
          "The flow decreases; the current in the circuit decreases",
          "The flow stays the same; the current stays the same",
          "The flow stops; the current stops"
        ],
        correctAnswerIndex: 1,
        topic: "Circuit analogies"
      },
      {
        q: "A flashlight has two batteries, a switch, and a bulb, connected in a loop. It does not light. You replace the batteries with new ones, and it still does not light. You then put the bulb into a different, working flashlight, and the bulb lights up.\n\nWhich part is most likely at fault?",
        options: [
          "The batteries, because they may still be dead even when new",
          "The bulb, because bulbs fail more often than switches",
          "Nothing is at fault; the flashlight just needs time to warm up",
          "The switch or the connections inside the flashlight, since the batteries and the bulb are both fine"
        ],
        correctAnswerIndex: 3,
        topic: "Troubleshooting"
      },
      {
        q: "A machine has three parts in a chain: a sensor detects a box, a controller receives the sensor's signal, and a motor moves the belt. The motor is not running. A technician checks the signals and finds that the controller is receiving the sensor's signal and is sending an output signal toward the motor, but the motor still does not move.\n\nWhere is the fault most likely?",
        options: [
          "In the sensor, because it is the first part in the chain",
          "In the controller, because it is the part that makes decisions",
          "In the motor or the wiring between the controller and the motor",
          "It cannot be narrowed down without replacing all three parts"
        ],
        correctAnswerIndex: 2,
        topic: "Tracing a fault"
      },
      {
        q: "A measuring cylinder is marked with numbers every 10 mL. Between the 40 mL and 50 mL marks there are 4 small lines that divide the space into 5 equal parts. The water surface is exactly at the 3rd small line above the 40 mL mark.\n\nWhat volume does the cylinder show?",
        options: [
          "43 mL",
          "46 mL",
          "44 mL",
          "48 mL"
        ],
        correctAnswerIndex: 1,
        topic: "Reading measurements"
      },
      {
        q: "Rule: A seesaw balances when (weight × distance from the pivot) on one side equals (weight × distance from the pivot) on the other side.\n\nA 50 kg child sits 1.2 m from the pivot. Where must a 30 kg child sit on the other side to balance?",
        options: ["0.72 m", "1.2 m", "2.0 m", "2.5 m"],
        correctAnswerIndex: 2,
        topic: "Balance and turning effect"
      },
      {
        q: "On machines, lockout means switching the power off at the main switch and attaching your own padlock to it, so nobody else can switch it back on while you work.\n\nA worker must clear a jam inside a machine. Which is the best example of lockout?",
        options: [
          "She presses the machine's stop button and asks a coworker to stand near the start button",
          "She hangs a \"Do Not Use\" sign on the start button and leaves the main power on",
          "She switches off the main switch and leaves it unlocked, because a switched-off machine cannot start",
          "She switches off the main switch, puts her own padlock on it, and keeps the key with her"
        ],
        correctAnswerIndex: 3,
        topic: "Machine safety"
      },
      {
        q: "Facts: \"Live\" means carrying electricity. Electricity can pass through a person's body into anyone who touches them.\n\nA coworker has grabbed a live, exposed wire and cannot let go. What should you do first?",
        options: [
          "Switch off the power at the source (or unplug the equipment) if you can reach it safely, then call for help",
          "Grab the coworker by the arm and pull them free right away",
          "Pour water over the wire and the coworker's hands to cool them",
          "Stay back and shout for help, without touching anything or the power switch"
        ],
        correctAnswerIndex: 0,
        topic: "Electrical safety"
      },
      {
        q: "Two identical bulbs are connected in parallel to one battery, so each bulb has its own separate path to the battery. One bulb burns out, breaking its path.\n\nWhat happens to the other bulb?",
        options: [
          "It goes out, because the whole circuit is now broken",
          "It gets dimmer, because the battery has less to power",
          "It gets brighter, because all the current now flows through it",
          "It stays lit, because it still has its own complete path"
        ],
        correctAnswerIndex: 3,
        topic: "Parallel circuits"
      },
      {
        q: "Facts: In a simple pulley system, effort = load ÷ number of supporting rope segments (ignoring friction). The length of rope you pull = the lift distance × the number of supporting segments.\n\nA 200 N load is lifted 1 m using 4 supporting segments. What effort and how much rope?",
        options: [
          "50 N; 1 m",
          "50 N; 4 m",
          "200 N; 4 m",
          "800 N; 1 m"
        ],
        correctAnswerIndex: 1,
        topic: "Pulleys"
      },
      {
        q: "Facts: In a series circuit, a break anywhere stops all current. With no current, every working part shows 0 V across it, and the full battery voltage appears across the break.\n\nA 9 V battery, a switch, and a lamp are connected in series. The switch is closed, but the lamp is off. A technician measures the voltage across the lamp and finds 0 V. Across the switch, the reading is 9 V.\n\nWhat does this show?",
        options: ["The lamp has burned out, because it shows 0 V", "The battery is dead, because the lamp is getting no voltage", "Nothing is wrong, because these are the normal readings for a working circuit", "The switch is not conducting even though it is closed, so it is the faulty part"],
        correctAnswerIndex: 3,
        topic: "Measuring a fault"
      },
      {
        q: "Facts: In a hydraulic system, the pressure is the same throughout the liquid. Pressure = force ÷ area.\n\nA hydraulic jack has a small piston with an area of 2 cm² and a large piston with an area of 20 cm². You push down on the small piston with a force of 100 N.\n\nWhat force does the large piston produce?",
        options: [
          "10 N",
          "2,000 N",
          "1,000 N",
          "100 N"
        ],
        correctAnswerIndex: 2,
        topic: "Hydraulics"
      },
      {
        q: "A circuit schematic, described in words: a battery is connected in a loop with a closed switch A and a lamp, and the lamp is lit. A second switch, B, is wired directly across the two ends of the lamp, giving a plain wire path around it. Switch B is currently open.\n\nWhat happens when switch B is closed?",
        options: [
          "The lamp stays equally bright, because it is still connected to the battery",
          "The lamp goes out, and a large current flows through switch B instead",
          "The lamp gets brighter, because current now has two paths to flow through",
          "Nothing flows anywhere, because the loop is now broken"
        ],
        correctAnswerIndex: 1,
        topic: "Reading schematics"
      }
    ]
  },

  /* ---------------------------------------------------------
     HT — Situational Judgment & Service Recovery
     --------------------------------------------------------- */
  HT: {
    title: "Situational Judgment & Service Recovery",
    blurb: "Choosing the best response in real service situations.",
    questions: [
      {
        q: "A guest at a hotel restaurant tells you the steak is overcooked. They have already eaten half of it. What is the best response?",
        options: ["Apologize, offer a free dessert, and clear the plate so the table can move on and enjoy the rest of the evening", "Apologize sincerely, ask whether they would like a remake or a different dish, and tell the kitchen exactly what went wrong", "Explain politely that steak keeps cooking on a hot plate, and suggest ordering it less done next time", "Take the plate away and bring a fresh steak without asking, so the guest does not have to wait through a discussion"],
        correctAnswerIndex: 1,
        topic: "Handling complaints"
      },
      {
        q: "A couple arrives late at the front desk. They confirmed a sea-view room for their anniversary, but the hotel is overbooked and only a garden-view room is left. What is the best way to handle this?",
        options: ["Give them the garden-view room and mention the difference only if they ask, so the evening is not spoiled by bad news at check-in", "Book them into a sea-view room at a nearby hotel at your hotel's expense and arrange their transport so they get the view they paid for", "Offer the garden-view room at a discount, and explain that it is the only room left tonight because of the overbooking", "Be honest at check-in, apologize, offer the garden view tonight with a confirmed sea-view room tomorrow, and a small anniversary gesture"],
        correctAnswerIndex: 3,
        topic: "Service recovery"
      },
      {
        q: "You are guiding a day tour. Heavy rain blocks the road to the waterfall, which most of the group paid to see. The group includes elderly guests and children. What should you do?",
        options: ["Explain the situation honestly, confirm safe alternatives with your operator, and offer the group two options with time and cost for each", "Keep the group at the roadblock until the rain eases, since the waterfall is the main reason they booked this tour", "Skip the waterfall, go straight to lunch, and refund that stop's cost at the end of the tour once the weather clears", "Choose the best alternative yourself and announce it clearly, so the group does not waste time debating in the rain"],
        correctAnswerIndex: 0,
        topic: "Handling changes"
      },
      {
        q: "During a wedding banquet, the head cook falls ill and the kitchen falls 20 minutes behind. You are a server on the floor. What is the most useful thing you can do?",
        options: ["Go into the kitchen and help plate dishes, since that is where the delay is and extra hands will speed things up", "Tell each table the kitchen is short-staffed and that you cannot say when food will arrive, so nobody is misled", "Ask your supervisor to stop taking new orders until the kitchen catches up, so the backlog does not grow further", "Stay on the floor, share your supervisor's time estimate, offer bread or drinks, and tell your supervisor which tables have waited longest"],
        correctAnswerIndex: 3,
        topic: "Working under pressure"
      },
      {
        q: "A chicken delivery arrived an hour ago and sat in a warm receiving area. The supplier says it was packed cold. A large booking arrives at noon. What should you do?",
        options: ["Use it, since it was packed cold by the supplier and thorough cooking will kill any bacteria that grew in transit", "Wash it thoroughly and cook it first, so it does not sit any longer before the noon booking arrives", "Probe-check its temperature, record it, and reject or quarantine it if above the safe limit, then tell the chef", "Use it only for well-done dishes and keep it away from ready-to-eat items, so any risk stays contained"],
        correctAnswerIndex: 2,
        topic: "Food safety"
      },
      {
        q: "You notice that a coworker you get along with overcharged a guest by ₱500 at checkout. The guest has already left without noticing. The coworker says, \"Please don't tell anyone, it was an honest mistake.\" What is the best response?",
        options: ["Say nothing this time but warn them to double-check bills in future, since the guest left happy and it was an honest mistake", "Quietly put ₱500 into the cash drawer from your own money, so the books balance and your coworker avoids trouble", "Go straight to the supervisor without telling your coworker, so they cannot talk you out of reporting it", "Urge your coworker to report it and arrange the refund with the supervisor today, and report it yourself if they refuse"],
        correctAnswerIndex: 3,
        topic: "Honesty at work"
      },
      {
        q: "You are caring for an elderly resident who says she is too tired for her bath today. Facility policy encourages daily hygiene. What is the best approach?",
        options: ["Explain that daily baths are facility policy and keep encouraging her until she agrees, so her routine stays consistent", "Skip it for today without telling anyone, since it is her decision and she is clearly tired", "Offer a quick face-and-hands wash-up now, suggest the full bath later today, and let the nurse know", "Ask a colleague she likes to persuade her, then bathe her as soon as she agrees to it"],
        correctAnswerIndex: 2,
        topic: "Care and dignity"
      },
      {
        q: "You are the only server on the floor. At the same moment, one guest calls for the bill because she is running late, and a guest at another table signals that he wants to order drinks. What should you do?",
        options: ["Take the drink order first, since a new order adds to sales and the other guest can pay when you pass by", "Acknowledge both at once, say you will be right with them, then bring the bill to the guest in a hurry first", "Serve whoever signaled first, to keep things fair, since guests tend to notice when others are served before them", "Ask both guests to wait while you look for a colleague who can take over one of the two requests"],
        correctAnswerIndex: 1,
        topic: "Prioritizing guests"
      },
      {
        q: "A tourist offers extra pay if you take them to a village festival that the community has marked as closed to outsiders. What is the best response?",
        options: ["Take them if your friend in the village agrees, and ask the tourist to stay at the back and avoid taking photos", "Accept, and charge extra to cover the risk of being questioned by the villagers if anyone objects to the visit", "Explain the community's rules and let the tourist decide whether to go alone, since that is their own choice", "Decline politely, explain that some events are reserved for the community, and offer public cultural activities or a local artisan visit instead"],
        correctAnswerIndex: 3,
        topic: "Respecting local culture"
      },
      {
        q: "A guest who has fully used a spa treatment asks for a refund, saying it was \"not relaxing enough.\" Policy allows refunds only for service failures, and the manager is off duty. What is the best response?",
        options: ["Politely refuse, quoting the policy that refunds are only for service failures, and wish the guest a pleasant day", "Refund the fee in full, since an unhappy guest can damage the spa's reputation and the amount is small", "Listen to what fell short, apologize sincerely, explain the policy, and ask the manager to review a possible credit tomorrow", "Offer a 10% voucher on the spot to end the discussion, even though the policy does not provide for one"],
        correctAnswerIndex: 2,
        topic: "Handling refund requests"
      },
      {
        q: "A guest with a severe peanut allergy orders a dessert, and you are not sure whether the sauce contains peanuts. What is the best response?",
        options: ["Say it is probably fine, since no nuts are listed on the menu, and mention the allergy to the kitchen afterward", "Serve it without the sauce, since taking off the sauce removes any risk from the dish for this guest", "Hand the guest the sauce label and let them decide for themselves, since it is their health to manage", "Check the ingredients with the kitchen, and offer a confirmed-safe dessert if the sauce cannot be verified"],
        correctAnswerIndex: 3,
        topic: "Guest safety"
      },
      {
        q: "A regular guest who is friends with the manager asks you to hold the last free table for his party, arriving in 30 minutes. The restaurant is full, and a family with a small child has been waiting 20 minutes for a table. The manager is not on the floor. What is the best response?",
        options: ["Hold the table for the regular guest, since regulars bring repeat business, and offer the family a free drink while they wait", "Tell both parties the restaurant is fully booked and that you cannot promise anyone a table, to keep things fair for everyone", "Seat the waiting family first, then offer the regular guest the next free table and a drink at the bar", "Call the manager and wait for instructions before seating anyone, so the decision does not rest on you alone, whatever the delay"],
        correctAnswerIndex: 2,
        topic: "Fairness to guests"
      },
      {
        q: "At 11 p.m., a guest in Room 305 calls the front desk to complain that a group next door is loudly celebrating. The group is a wedding party that has booked most of the floor, and they are not breaking any hotel rule yet.\n\nWhat is the best response?",
        options: ["Explain that the wedding party booked most of the floor, that noise is part of their event, and that it will end soon", "Tell the guest you will pass the complaint to the day manager, and ask them to put it in writing at checkout", "Move the guest to another room immediately and offer a free night, so there is no need to speak to the party", "Apologize, politely ask the wedding party to lower the volume, then check back and offer another room if the noise continues"],
        correctAnswerIndex: 3,
        topic: "Handling noise complaints"
      },
      {
        q: "A guest at the front desk asks for a quiet, inexpensive place for dinner. A lively, expensive restaurant nearby pays hotel staff a small commission for each guest sent there. A simple café two streets away would suit this guest much better.\n\nWhat is the best response?",
        options: ["Recommend the restaurant, since it has a partnership with the hotel, and describe it honestly as lively so the guest can decide", "Recommend the café that fits what the guest asked for, and tell your supervisor about the commission offer", "Recommend both places equally without mentioning which one pays you, and let the guest make the final choice alone", "Decline to recommend anything and hand the guest a printed list of every restaurant within walking distance"],
        correctAnswerIndex: 1,
        topic: "Honest recommendations"
      },
      {
        q: "During a busy breakfast service, a coworker arrives 20 minutes late for the third time this week, and you have been covering part of their tables. You are getting tired and a little resentful.\n\nWhat is the best next step?",
        options: ["Keep covering quietly, since guests are being served and raising the problem would only create tension on the team", "Tell the supervisor straight away, in front of the rest of the team, so the lateness is dealt with immediately", "Stop covering their tables from tomorrow, so they feel the effect of arriving late and learn to be on time", "Speak to the coworker privately about the effect on you and the guests, and tell the supervisor if it continues"],
        correctAnswerIndex: 3,
        topic: "Teamwork under pressure"
      }
    ]
  }
};

/* =========================================================
   INTEREST QUESTIONNAIRE (no right or wrong answers)
   Part A: 24 statements rated 1-5 (4 per strand, shown in random order).
   Part B: 6 forced-choice items. Each lists one activity per strand;
           the student picks one "most" and one "least".
   Strand tags are never shown to students.
   ========================================================= */
const INTEREST = {
  title: "Interests & Preferences",
  blurb: "What you enjoy doing, with no right or wrong answers.",
  ratingLabels: ["Not me at all", "Not really me", "Not sure", "Somewhat me", "Very much me"],
  statements: [
    { id: "STEM-1", strand: "STEM", text: "I enjoy working out why an experiment gave the result it did." },
    { id: "STEM-2", strand: "STEM", text: "I like figuring out how living things and the natural world work." },
    { id: "STEM-3", strand: "STEM", text: "I would enjoy spending an afternoon solving tricky math puzzles." },
    { id: "STEM-4", strand: "STEM", text: "I like asking \"what would happen if...?\" and then testing it." },
    { id: "ASSH-1", strand: "ASSH", text: "I enjoy reading and talking about stories, history, or people's ideas." },
    { id: "ASSH-2", strand: "ASSH", text: "I like writing out my opinion and backing it up with reasons." },
    { id: "ASSH-3", strand: "ASSH", text: "I am curious about why societies, cultures, or governments work the way they do." },
    { id: "ASSH-4", strand: "ASSH", text: "I enjoy debating or discussing issues with other people." },
    { id: "BM-1", strand: "BM", text: "I would enjoy planning how to start and run a small business." },
    { id: "BM-2", strand: "BM", text: "I am curious how shops and companies decide what to charge." },
    { id: "BM-3", strand: "BM", text: "I am interested in how money is earned, saved, and grown." },
    { id: "BM-4", strand: "BM", text: "I enjoy deciding where a limited budget should go." },
    { id: "ICT-1", strand: "ICT", text: "I would enjoy building a website or an app from scratch." },
    { id: "ICT-2", strand: "ICT", text: "I like figuring out why a computer or program is not working." },
    { id: "ICT-3", strand: "ICT", text: "I enjoy writing step-by-step instructions for a computer or game to follow." },
    { id: "ICT-4", strand: "ICT", text: "I am curious how phones, games, and the internet work behind the scenes." },
    { id: "IA-1", strand: "IA", text: "I would enjoy taking apart a broken appliance to see how it works." },
    { id: "IA-2", strand: "IA", text: "I like building or fixing things with my hands and tools." },
    { id: "IA-3", strand: "IA", text: "I enjoy working with wiring, circuits, or machines." },
    { id: "IA-4", strand: "IA", text: "I would enjoy following a diagram or blueprint to build something that actually works." },
    { id: "HT-1", strand: "HT", text: "I like making sure guests or visitors feel welcome and looked after." },
    { id: "HT-2", strand: "HT", text: "I would enjoy cooking for, or serving, other people." },
    { id: "HT-3", strand: "HT", text: "I enjoy planning trips, events, or parties for a group." },
    { id: "HT-4", strand: "HT", text: "If a customer or guest was upset, I would enjoy finding a way to turn their experience around." }
  ],
  forced: [
    {
      prompt: "Your school is running a community day. Which job would you want most, and which would you want least?",
      options: { STEM: "Test water samples from the school well and record the results", ASSH: "Write and deliver the opening speech to the whole crowd", BM: "Handle the budget and decide the ticket prices", ICT: "Build the online sign-up page and fix its bugs", IA: "Wire up the lights and fix the sound equipment", HT: "Welcome guests at the gate and look after their needs" }
    },
    {
      prompt: "Your class gets a free project day. Which would you want most, and which would you want least?",
      options: { STEM: "Design an experiment to test a question you're curious about", ASSH: "Research a historical event and write a persuasive article", BM: "Plan a mini-stall: costs, prices and expected profit", ICT: "Build a simple game other students can play", IA: "Repair a broken electric fan and make it work again", HT: "Plan a class day trip, including food and stops" }
    },
    {
      prompt: "It's the school fair and you get to run a booth. Which would you want most, and which would you want least?",
      options: { STEM: "A science booth where visitors predict a chemical reaction", ASSH: "A debate corner where visitors argue both sides", BM: "A stall where you track stock, set prices and count profit", ICT: "An arcade booth with games you coded", IA: "A build-it booth where visitors assemble a working circuit", HT: "A guest-services booth that greets visitors and handles complaints" }
    },
    {
      prompt: "The school anniversary is coming up. Which task would you want most, and which would you want least?",
      options: { STEM: "Survey campus plants and record how the greenery has changed", ASSH: "Interview alumni and write their stories for the booklet", BM: "Compare supplier quotes and choose the best within budget", ICT: "Build an alumni database and sort it for printed lists", IA: "Build the stage platform from a plan, using real tools", HT: "Plan the welcome program and seating for guests of honor" }
    },
    {
      prompt: "You get a free week to try one job. Which would you want most, and which would you want least?",
      options: { STEM: "Help a scientist collect and analyze field data", ASSH: "Report on local issues for a newspaper", BM: "Help a shop owner review sales and plan next month's stock", ICT: "Join a software team that tests and fixes an app", IA: "Shadow a technician repairing machines and electrical systems", HT: "Work a hotel front desk helping arriving guests" }
    },
    {
      prompt: "The canteen queues are far too long. Which part of the fix would you want most, and which would you want least?",
      options: { STEM: "Time the queue for a week and analyze the data for the cause", ASSH: "Interview students and write a proposal that convinces the principal", BM: "Work out what each fix costs and which pays back fastest", ICT: "Design an app that lets students pre-order lunch", IA: "Redesign the counter layout and build a working prototype", HT: "Train canteen staff to serve faster and handle complaints politely" }
    }
  ]
};