/* eslint-disable camelcase, max-len */
'use strict';

exports.seed = function(knex) {
  return knex('recipes').del()
    .then(() => knex('recipes').insert([
      {
        id: 1,
        code: '87238978',
        likes: 5,
        name: 'A Good Easy Garlic Chicken',
        description: 'Sprinkle chicken breasts with garlic powder, onion powder and seasoning salt - then sautee and enjoy. Couldn\'t be easier! Great recipe for quick and easy meal, even for the pickiest eater!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/605723.jpg',
        user_id: 1,
        created_at: new Date('2016-07-26 14:26:16 UTC'),
        updated_at: new Date('2016-07-26 14:26:16 UTC'),
        ingredients: '["3 tbsp butter","4 skinless, boneless chicken breast halves","2 tsp garlic powder","1 tsp seasoning salt","1 tsp onion powder"]',
        instructions: '["Melt butter in a large skillet over medium high heat. Add chicken and sprinkle with garlic powder, seasoning salt and onion powder. Saute about 10 to 15 minutes on each side, or until chicken is cooked through and juices run clear."]'
      },
      {
        id: 2,
        code: '9737883',
        likes: 3,
        name: 'Lime Chicken Soft Tacos',
        description: 'I was given this recipe by my mom when I went away to college, and it has become all of my friends\' favorite!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/642313.jpg',
        user_id: 2,
        created_at: new Date('2016-07-27 14:26:16 UTC'),
        updated_at: new Date('2016-07-27 14:26:16 UTC'),
        ingredients: '["1 1/2 pounds skinless, boneless chicken breast meat - cubed","1/8 cup red wine vinegar","1/2 lime, juiced","1 teaspoon white sugar","1/2 teaspoon salt","1/2 teaspoon ground black pepper","2 green onions, chopped","2 cloves garlic, minced","1 teaspoon dried oregano","10 (6 inch) flour tortillas","1 tomato, diced","1/4 cup shredded lettuce","1/4 cup shredded Monterey Jack cheese","1/4 cup salsa"]',
        instructions: '["Saute chicken in a medium saucepan over medium high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, green onion, garlic and oregano. Simmer for an extra 10 minutes.","Heat an iron skillet over medium heat. Place a tortilla in the pan, warm, and turn over to heat the other side. Repeat with remaining tortillas. Serve lime chicken mixture in warm tortillas topped with tomato, lettuce, cheese and salsa."]'
      },
      {
        id: 3,
        code: '3287932',
        likes: 4,
        name: 'Honey Mustard Grilled Chicken',
        description: '\'If ye have faith as a grain of mustard seed\', ye shall make and enjoy this simple, tangy, delicious grilled chicken dish!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/438013.jpg',
        user_id: 3,
        created_at: new Date('2016-07-28 14:26:16 UTC'),
        updated_at: new Date('2016-07-28 14:26:16 UTC'),
        ingredients: '["1/3 cup Dijon mustard","1/4 cup honey","2 tablespoons mayonnaise","1 teaspoon steak sauce","4 skinless, boneless chicken breast halves"]',
        instructions: '["Saute chicken in a medium saucepan over medium high heat for about 20 minutes. Add vinegar, lime juice, sugar, salt, pepper, green onion, garlic and oregano. Simmer for an extra 10 minutes.","Heat an iron skillet over medium heat. Place a tortilla in the pan, warm, and turn over to heat the other side. Repeat with remaining tortillas. Serve lime chicken mixture in warm tortillas topped with tomato, lettuce, cheese and salsa."]'
      },
      {
        id: 4,
        code: '723782',
        likes: 10,
        name: 'Farm Lady\'s Delicious Chicken Parmesan',
        description: 'Even the kids love it! Thin chicken breasts are dusted in bread crumbs (seasoned with Parmesan cheese, basil, and oregano), then baked for 10-12 minutes. Top with mozzarella and serve with your favorite spaghetti sauce!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/2571826.jpg',
        user_id: 4,
        created_at: new Date('2016-07-29 14:26:16 UTC'),
        updated_at: new Date('2016-07-29 14:26:16 UTC'),
        ingredients: '["2 cups spaghetti sauce","1 egg white","1 tablespoon water","1/2 cup all-purpose flour","1 cup dry bread crumbs","2 tablespoons grated Parmesan cheese","1/2 teaspoon dried basil","1/2 teaspoon dried oregano","1/4 teaspoon salt","1/8 teaspoon ground black pepper","4 (4 ounce) skinless, boneless chicken breast halves - pounded 1/4 inch thick","butter-flavored cooking spray","1 cup shredded mozzarella cheese"]',
        instructions: '["Preheat oven to 450 degrees F (230 degrees C). Pour spaghetti sauce into a saucepan over low heat.","Whisk egg white and water together in a shallow bowl until evenly combined. Spread the flour out onto a plate. In a shallow bowl, mix the bread crumbs, Parmesan cheese, basil, oregano, salt, and black pepper until thoroughly combined.","Dip the chicken breasts into the flour, and shake off loose flour; dip them into the egg white, then gently press into the seasoned crumbs. Shake off loose crumbs; spray both side of the chicken breasts with the cooking spray. Lay the chicken breasts onto a nonstick baking sheet.","Bake the chicken breasts in the preheated oven until golden brown, 10 to 12 minutes. Remove from oven, and sprinkle with the mozzarella cheese; return to oven and bake until the cheese is melted and starting to brown, 1 to 2 more minutes. Serve topped with the hot spaghetti sauce."]'
      },
      {
        id: 5,
        code: '188827',
        likes: 21,
        name: 'Vegetarian Stuffed Red Bell Peppers',
        description: 'These stuffed peppers are so fresh tasting and healthy. They make a great side dish or a meal on their own.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/877395.jpg',
        user_id: 5,
        created_at: new Date('2016-07-30 14:26:16 UTC'),
        updated_at: new Date('2016-07-30 14:26:16 UTC'),
        ingredients: '["1 cup quinoa","1 cup water","2 red bell peppers","1/2 Granny Smith apple, cored and chopped","1 tablespoon fresh lime juice","1 teaspoon olive oil","1 clove garlic, minced","1 1/2 tablespoons chopped fresh parsley","1 1/2 tablespoons chopped fresh mint","1 cup chopped tomatoes","3 green onions, thinly sliced","sea salt and pepper to taste"]',
        instructions: '["Bring the quinoa and water to a boil in a saucepan over high heat. Reduce heat to medium-low, cover, and simmer until the quinoa is tender, 20 to 25 minutes.","Preheat oven to 350 degrees F (175 degrees C). Lightly grease a small baking dish. Halve the red peppers lengthwise. Remove the seeds and ribs, but leave the stem intact so the pepper bowls hold their shape; place cut-side-up into the prepared baking dish.","Toss the chopped apple with the lime juice, olive oil, garlic, parsley, mint, tomatoes, and green onions. Fold in the quinoa, and season to taste with salt and pepper. Fill the cut peppers with this mixture, and fill the baking dish with about 1/4 inch of water.","Bake in preheated oven until the peppers are tender, and the quinoa is hot, about 20 minutes."]'
      },
      {
        id: 6,
        code: '62611',
        likes: 14,
        name: 'Unbelievable Chicken',
        description: 'This unusual combination of common ingredients is fabulous! Everyone who tastes it asks me to share the recipe. You will love it and the many compliments you get--I promise!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/259036.jpg',
        user_id: 6,
        created_at: new Date('2016-08-01 14:26:16 UTC'),
        updated_at: new Date('2016-08-01 14:26:16 UTC'),
        ingredients: '["1/4 cup cider vinegar","3 tablespoons prepared coarse-ground mustard","3 cloves garlic, peeled and minced","1 lime, juiced","1/2 lemon, juiced","1/2 cup brown sugar","1 1/2 teaspoons salt","ground black pepper to taste","6 tablespoons olive oil","6 skinless, boneless chicken breast halves"]',
        instructions: '["In a large glass bowl, mix the cider vinegar, mustard, garlic, lime juice, lemon juice, brown sugar, salt, and pepper. Whisk in the olive oil. Place chicken in the mixture. Cover, and marinate 8 hours, or overnight.","Preheat an outdoor grill for high heat.","Lightly oil the grill grate. Place chicken on the prepared grill, and cook 6 to 8 minutes per side, until juices run clear. Discard marinade."]'
      },
      {
        id: 7,
        code: '52627',
        likes: 100,
        name: 'Best Big, Fat, Chewy Chocolate Chip Cookie',
        description: 'These cookies are the pinnacle of perfection! If you want a big, fat, chewy cookie like the kind you see at bakeries and specialty shops, then these are the cookies for you!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/1107530.jpg',
        user_id: 1,
        created_at: new Date('2016-08-02 14:26:16 UTC'),
        updated_at: new Date('2016-08-02 14:26:16 UTC'),
        ingredients: '["2 cups all-purpose flour","1/2 teaspoon baking soda","1/2 teaspoon salt","3/4 cup unsalted butter, melted","1 cup packed brown sugar","1/2 cup white sugar","1 tablespoon vanilla extract","1 egg","1 egg yolk","2 cups semisweet chocolate chips"]',
        instructions: '["Preheat the oven to 325 degrees F (165 degrees C). Grease cookie sheets or line with parchment paper.","Sift together the flour, baking soda and salt; set aside.","In a medium bowl, cream together the melted butter, brown sugar and white sugar until well blended. Beat in the vanilla, egg, and egg yolk until light and creamy. Mix in the sifted ingredients until just blended. Stir in the chocolate chips by hand using a wooden spoon. Drop cookie dough 1/4 cup at a time onto the prepared cookie sheets. Cookies should be about 3 inches apart.","Bake for 15 to 17 minutes in the preheated oven, or until the edges are lightly toasted. Cool on baking sheets for a few minutes before transferring to wire racks to cool completely."]'
      },
      {
        id: 8,
        code: '3788672678',
        likes: 34,
        name: 'Rosemary Ranch Chicken Kabobs',
        description: 'This rosemary ranch chicken recipe is so delicious, tender, and juicy the chicken will melt in your mouth. Even the most picky eater will be begging for the last piece.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/642001.jpg',
        user_id: 2,
        created_at: new Date('2016-08-03 14:26:16 UTC'),
        updated_at: new Date('2016-08-03 14:26:16 UTC'),
        ingredients: '["1/2 cup olive oil","1/2 cup ranch dressing","3 tablespoons Worcestershire sauce","1 tablespoon minced fresh rosemary","2 teaspoons salt","1 teaspoon lemon juice","1 teaspoon white vinegar","1/4 teaspoon ground black pepper, or to taste","1 tablespoon white sugar, or to taste (optional)","5 skinless, boneless chicken breast halves - cut into 1 inch cubes"]',
        instructions: '["In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.","Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.","Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear."]'
      },
      {
        id: 9,
        code: '37833332678',
        likes: 27,
        name: 'Banana Crumb Muffins',
        description: 'The crumb topping is what makes these banana muffins stand apart from the ordinary. They\'re scrumptious!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/428420.jpg',
        user_id: 3,
        created_at: new Date('2016-08-04 14:26:16 UTC'),
        updated_at: new Date('2016-08-04 14:26:16 UTC'),
        ingredients: '["1 1/2 cups all-purpose flour","1 teaspoon baking soda","1 teaspoon baking powder","1/2 teaspoon salt","3 bananas, mashed","3/4 cup white sugar","1 egg, lightly beaten","1/3 cup butter, melted","1/3 cup packed brown sugar","2 tablespoons all-purpose flour","1/8 teaspoon ground cinnamon","1 tablespoon butter"]',
        instructions: '["Preheat oven to 375 degrees F (190 degrees C). Lightly grease 10 muffin cups, or line with muffin papers.","In a large bowl, mix together 1 1/2 cups flour, baking soda, baking powder and salt. In another bowl, beat together bananas, sugar, egg and melted butter. Stir the banana mixture into the flour mixture just until moistened. Spoon batter into prepared muffin cups.","In a small bowl, mix together brown sugar, 2 tablespoons flour and cinnamon. Cut in 1 tablespoon butter until mixture resembles coarse cornmeal. Sprinkle topping over muffins.","Bake in preheated oven for 18 to 20 minutes, until a toothpick inserted into center of a muffin comes out clean."]'
      },
      {
        id: 10,
        code: '3787732678',
        likes: 25,
        name: 'Clone of a Cinnabon',
        description: 'You have got to try these. The first time I made them, I thought of how much money I could save by making my own!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/36449.jpg',
        user_id: 4,
        created_at: new Date('2016-08-05 14:26:16 UTC'),
        updated_at: new Date('2016-08-05 14:26:16 UTC'),
        ingredients: '["1 cup warm milk (110 degrees F/45 degrees C)","2 eggs, room temperature","1/3 cup margarine, melted","4 1/2 cups bread flour","1 teaspoon salt","1/2 cup white sugar","2 1/2 teaspoons bread machine yeast","1 cup brown sugar, packed","2 1/2 tablespoons ground cinnamon","1/3 cup butter, softened","1 (3 ounce) package cream cheese, softened","1/4 cup butter, softened","1 1/2 cups confectioners\' sugar","1/2 teaspoon vanilla extract","1/8 teaspoon salt"]',
        instructions: '["Place ingredients in the pan of the bread machine in the order recommended by the manufacturer. Select dough cycle; press Start.","After the dough has doubled in size turn it out onto a lightly floured surface, cover and let rest for 10 minutes. In a small bowl, combine brown sugar and cinnamon.","Roll dough into a 16x21-inch rectangle. Spread dough with 1/3 cup butter and sprinkle evenly with sugar/cinnamon mixture. Roll up dough and cut into 12 rolls. Place rolls in a lightly greased 9x13 inch baking pan. Cover and let rise until nearly doubled, about 30 minutes. Meanwhile, preheat oven to 400 degrees F (200 degrees C).","Bake rolls in preheated oven until golden brown, about 15 minutes. While rolls are baking, beat together cream cheese, 1/4 cup butter, confectioners\' sugar, vanilla extract and salt. Spread frosting on warm rolls before serving."]'
      },
      {
        id: 11,
        code: '371212121678',
        likes: 9,
        name: 'Boilermaker Tailgate Chili',
        description: 'This is the chili recipe the gang eats at Purdue Boilermaker football games. I always prep and cook the chili the night before and then reheat the next day. This is a combination of many different tomato-based chili recipes. Good luck and enjoy.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/890638.jpg',
        user_id: 5,
        created_at: new Date('2016-08-04 14:26:16 UTC'),
        updated_at: new Date('2016-08-04 14:26:16 UTC'),
        ingredients: '["2 pounds ground beef chuck","1 pound bulk Italian sausage","3 (15 ounce) cans chili beans, drained","1 (15 ounce) can chili beans in spicy sauce","2 (28 ounce) cans diced tomatoes with juice","1 (6 ounce) can tomato paste","1 large yellow onion, chopped","3 stalks celery, chopped","1 green bell pepper, seeded and chopped","1 red bell pepper, seeded and chopped","2 green chile peppers, seeded and chopped","1 tablespoon bacon bits","4 cubes beef bouillon","1/2 cup beer","1/4 cup chili powder","1 tablespoon Worcestershire sauce","1 tablespoon minced garlic","1 tablespoon dried oregano","2 teaspoons ground cumin","2 teaspoons hot pepper sauce (e.g. Tabasco™)","1 teaspoon dried basil","1 teaspoon salt","1 teaspoon ground black pepper","1 teaspoon cayenne pepper","1 teaspoon paprika","1 teaspoon white sugar","1 (10.5 ounce) bag corn chips such as Fritos®","1 (8 ounce) package shredded Cheddar cheese"]',
        instructions: '["Heat a large stock pot over medium-high heat. Crumble the ground chuck and sausage into the hot pan, and cook until evenly browned. Drain off excess grease.","Pour in the chili beans, spicy chili beans, diced tomatoes and tomato paste. Add the onion, celery, green and red bell peppers, chile peppers, bacon bits, bouillon, and beer. Season with chili powder, Worcestershire sauce, garlic, oregano, cumin, hot pepper sauce, basil, salt, pepper, cayenne, paprika, and sugar. Stir to blend, then cover and simmer over low heat for at least 2 hours, stirring occasionally.","After 2 hours, taste, and adjust salt, pepper, and chili powder if necessary. The longer the chili simmers, the better it will taste. Remove from heat and serve, or refrigerate, and serve the next day.","To serve, ladle into bowls, and top with corn chips and shredded Cheddar cheese."]'
      },
      {
        id: 12,
        code: '72626222222',
        likes: 56,
        name: 'Creamy Au Gratin Potatoes',
        description: 'This is my husband\'s favorite dish, and he considers it a special occasion every time I make it. The creamy cheese sauce and the tender potatoes in this classic French dish combine to make a deliciously addictive experience. It\'s a great side dish with a roast pork loin or beef tenderloin. Add a green salad and French bread, and you have found the magic path to a man\'s heart. To avoid lumps in your sauce, add the milk just a little at a time as you stir the flour and butter. Experiment with different cheeses for variety.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/738814.jpg',
        user_id: 5,
        created_at: new Date('2016-08-07 14:26:16 UTC'),
        updated_at: new Date('2016-08-07 14:26:16 UTC'),
        ingredients: '["4 russet potatoes, sliced into 1/4 inch slices","1 onion, sliced into rings","salt and pepper to taste","3 tablespoons butter","3 tablespoons all-purpose flour","1/2 teaspoon salt","2 cups milk","1 1/2 cups shredded Cheddar cheese"]',
        instructions: '["Preheat oven to 400 degrees F (200 degrees C). Butter a 1 quart casserole dish.","Layer 1/2 of the potatoes into bottom of the prepared casserole dish. Top with the onion slices, and add the remaining potatoes. Season with salt and pepper to taste.","In a medium-size saucepan, melt butter over medium heat. Mix in the flour and salt, and stir constantly with a whisk for one minute. Stir in milk. Cook until mixture has thickened. Stir in cheese all at once, and continue stirring until melted, about 30 to 60 seconds. Pour cheese over the potatoes, and cover the dish with aluminum foil.","Bake 1 1/2 hours in the preheated oven."]'
      },
      {
        id: 13,
        code: '711112322',
        likes: 72,
        name: 'Roast Sticky Chicken-Rotisserie Style',
        description: 'Ever wish you could get that restaurant-style rotisserie chicken at home? Well, with minimal preparation and about 5 hours\' cooking time (great for the weekends!) you can! I don\'t bother to baste the bird, though some like to for the first hour. The pan juices always caramelize at the bottom, and the chicken will turn golden brown...fall-off-the-bone good!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/46458.jpg',
        user_id: 3,
        created_at: new Date('2016-08-08 14:26:18 UTC'),
        updated_at: new Date('2016-08-08 14:26:18 UTC'),
        ingredients: '["4 teaspoons salt","2 teaspoons paprika","1 teaspoon onion powder","1 teaspoon dried thyme","1 teaspoon white pepper","1/2 teaspoon cayenne pepper","1/2 teaspoon black pepper","1/2 teaspoon garlic powder","2 onions, quartered","2 (4 pound) whole chickens"]',
        instructions: '["In a small bowl, mix together salt, paprika, onion powder, thyme, white pepper, black pepper, cayenne pepper, and garlic powder. Remove and discard giblets from chicken. Rinse chicken cavity, and pat dry with paper towel. Rub each chicken inside and out with spice mixture. Place 1 onion into the cavity of each chicken. Place chickens in a resealable bag or double wrap with plastic wrap. Refrigerate overnight, or at least 4 to 6 hours.","Preheat oven to 250 degrees F (120 degrees C).","Place chickens in a roasting pan. Bake uncovered for 5 hours, to a minimum internal temperature of 180 degrees F (85 degrees C). Let the chickens stand for 10 minutes before carving."]'
      },
      {
        id: 14,
        code: '37ab73aaa7923hssy',
        likes: 65,
        name: 'Peanut Butter Cup Cookies',
        description: 'These cookies have a sweet peanut butter cup center.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/271187.jpg',
        user_id: 6,
        created_at: new Date('2016-08-09 14:26:16 UTC'),
        updated_at: new Date('2016-08-09 14:26:16 UTC'),
        ingredients: '["1 3/4 cups all-purpose flour","1/2 teaspoon salt","1 teaspoon baking soda","1/2 cup butter, softened","1/2 cup white sugar","1/2 cup peanut butter","1/2 cup packed brown sugar","1 egg, beaten","1 teaspoon vanilla extract","2 tablespoons milk","40 miniature chocolate covered peanut butter cups, unwrapped"]',
        instructions: '["Preheat oven to 375 degrees F (190 degrees C). Sift together the flour, salt and baking soda; set aside.","Cream together the butter, sugar, peanut butter and brown sugar until fluffy. Beat in the egg, vanilla and milk. Add the flour mixture; mix well. Shape into 40 balls and place each into an ungreased mini muffin pan.","Bake at 375 degrees for about 8 minutes. Remove from oven and immediately press a mini peanut butter cup into each ball. Cool and carefully remove from pan."]'
      },
      {
        id: 15,
        code: '37abthaa7923hssy',
        likes: 50,
        name: 'Jamie\'s Cranberry Spinach Salad',
        description: 'Everyone I have made this for RAVES about it! It\'s different and so easy to make!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/273205.jpg',
        user_id: 1,
        created_at: new Date('2016-08-10 14:26:16 UTC'),
        updated_at: new Date('2016-08-10 14:26:16 UTC'),
        ingredients: '["1 tablespoon butter","3/4 cup almonds, blanched and slivered","1 pound spinach, rinsed and torn into bite-size pieces","1 cup dried cranberries","2 tablespoons toasted sesame seeds","1 tablespoon poppy seeds","1/2 cup white sugar","2 teaspoons minced onion","1/4 teaspoon paprika","1/4 cup white wine vinegar","1/4 cup cider vinegar","1/2 cup vegetable oil"]',
        instructions: '["In a medium saucepan, melt butter over medium heat. Cook and stir almonds in butter until lightly toasted. Remove from heat, and let cool.","In a medium bowl, whisk together the sesame seeds, poppy seeds, sugar, onion, paprika, white wine vinegar, cider vinegar, and vegetable oil. Toss with spinach just before serving.","In a large bowl, combine the spinach with the toasted almonds and cranberries."]'
      },
      {
        id: 16,
        code: '37abtua7923hssy',
        likes: 49,
        name: 'Brooke\'s Best Bombshell Brownies',
        description: 'These brownies are the bomb! I\'ve found the perfect combination of ingredients to make the fudgiest brownies yet... Enjoy!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/358859.jpg',
        user_id: 4,
        created_at: new Date('2016-08-11 14:26:16 UTC'),
        updated_at: new Date('2016-08-11 14:26:16 UTC'),
        ingredients: '["1 cup butter, melted","3 cups white sugar","1 tablespoon vanilla extract","4 eggs","1 1/2 cups all-purpose flour","1 cup unsweetened cocoa powder","1 teaspoon salt","1 cup semisweet chocolate chips"]',
        instructions: '["Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x13 baking dish.","Combine the melted butter, sugar, and vanilla in a large bowl. Beat in the eggs, one at a time, mixing well after each, until thoroughly blended.","Sift the flour, cocoa powder, and salt in a bowl. Gradually stir flour mixture into the egg mixture until blended. Stir in the chocolate morsels. Spread the batter evenly into the prepared baking dish.","Bake in preheated oven until an inserted toothpick comes out clean, 35 to 40 minutes. Remove, and cool pan on wire rack before cutting."]'
      },
      {
        id: 17,
        code: '37ab3344hs33',
        likes: 45,
        name: 'Angel Chicken Pasta',
        description: 'A delicious, easy company dish - the flavors are wonderful. A favorite with my family. I usually double the recipe so we can have leftovers.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/525185.jpg',
        user_id: 6,
        created_at: new Date('2016-08-08 14:26:16 UTC'),
        updated_at: new Date('2016-08-08 14:26:16 UTC'),
        ingredients: '["6 skinless, boneless chicken breast halves","1/4 cup butter","1 (.7 ounce) package dry Italian-style salad dressing mix","1/2 cup white wine","1 (10.75 ounce) can condensed golden mushroom soup","4 ounces cream cheese with chives","1 pound angel hair pasta"]',
        instructions: '["Preheat oven to 325 degrees F (165 degrees C).","In a large saucepan, melt butter over low heat. Stir in the package of dressing mix. Blend in wine and golden mushroom soup. Mix in cream cheese, and stir until smooth. Heat through, but do not boil. Arrange chicken breasts in a single layer in a 9x13 inch baking dish. Pour sauce over.","Bake for 60 minutes in the preheated oven. Twenty minutes before the chicken is done, bring a large pot of lightly salted water to a rolling boil. Cook pasta until al dente, about 5 minutes. Drain. Serve chicken and sauce over pasta."]'
      },
      {
        id: 18,
        code: '6352hsis12h33',
        likes: 40,
        name: 'Marinated Grilled Shrimp',
        description: 'A very simple and easy marinade that makes your shrimp so yummy you don\'t even need cocktail sauce! Don\'t let the cayenne pepper scare you, you don\'t even taste it. My 2 and 4 year-olds love it and eat more shrimp than their parents! It is also a big hit with company, and easy to prepare. I make this with frozen or fresh shrimp and use my indoor electric grill if the weather is not good for outside grilling. Try it with a salad, baked potato, and garlic bread. You will not be disappointed!!!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/2374052.jpg',
        user_id: 6,
        created_at: new Date('2016-08-03 14:26:16 UTC'),
        updated_at: new Date('2016-08-03 14:26:16 UTC'),
        ingredients: '["3 cloves garlic, minced","1/3 cup olive oil","1/4 cup tomato sauce","2 tablespoons red wine vinegar","2 tablespoons chopped fresh basil","1/2 teaspoon salt","1/4 teaspoon cayenne pepper","2 pounds fresh shrimp, peeled and deveined","skewers"]',
        instructions: '["In a large bowl, stir together the garlic, olive oil, tomato sauce, and red wine vinegar. Season with basil, salt, and cayenne pepper. Add shrimp to the bowl, and stir until evenly coated. Cover, and refrigerate for 30 minutes to 1 hour, stirring once or twice.","Preheat grill for medium heat. Thread shrimp onto skewers, piercing once near the tail and once near the head. Discard marinade.","Lightly oil grill grate. Cook shrimp on preheated grill for 2 to 3 minutes per side, or until opaque."]'
      },
      {
        id: 19,
        code: '6a4rt612h33',
        likes: 43,
        name: 'Eggplant Parmesan',
        description: 'This is a no fry variation of this popular dish, and is just as delicious!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/689088.jpg',
        user_id: 1,
        created_at: new Date('2016-08-04 14:26:16 UTC'),
        updated_at: new Date('2016-08-04 14:26:16 UTC'),
        ingredients: '["3 eggplant, peeled and thinly sliced","2 eggs, beaten","4 cups Italian seasoned bread crumbs","6 cups spaghetti sauce, divided","1 (16 ounce) package mozzarella cheese, shredded and divided","1/2 cup grated Parmesan cheese, divided","1/2 teaspoon dried basil"]',
        instructions: '["Preheat oven to 350 degrees F (175 degrees C).","Dip eggplant slices in egg, then in bread crumbs. Place in a single layer on a baking sheet. Bake in preheated oven for 5 minutes on each side.","In a 9x13 inch baking dish spread spaghetti sauce to cover the bottom. Place a layer of eggplant slices in the sauce. Sprinkle with mozzarella and Parmesan cheeses. Repeat with remaining ingredients, ending with the cheeses. Sprinkle basil on top.","Bake in preheated oven for 35 minutes, or until golden brown."]'
      },
      {
        id: 20,
        code: '6a4ajjha222',
        likes: 58,
        name: 'Curried Coconut Chicken',
        description: 'Curried chicken simmered in coconut milk and tomatoes makes for a mouthwatering hint of the tropics! Goes great with rice and vegetables.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/2627058.jpg',
        user_id: 3,
        created_at: new Date('2016-08-06 14:26:16 UTC'),
        updated_at: new Date('2016-08-06 14:26:16 UTC'),
        ingredients: '["2 pounds boneless skinless chicken breasts, cut into 1/2-inch chunks","1 teaspoon salt and pepper, or to taste","1 1/2 tablespoons vegetable oil","2 tablespoons curry powder","1/2 onion, thinly sliced","2 cloves garlic, crushed","1 (14 ounce) can coconut milk","1 (14.5 ounce) can stewed, diced tomatoes","1 (8 ounce) can tomato sauce","3 tablespoons sugar"]',
        instructions: '["Season chicken pieces with salt and pepper.","Heat oil and curry powder in a large skillet over medium-high heat for two minutes. Stir in onions and garlic, and cook 1 minute more. Add chicken, tossing lightly to coat with curry oil. Reduce heat to medium, and cook for 7 to 10 minutes, or until chicken is no longer pink in center and juices run clear.","Pour coconut milk, tomatoes, tomato sauce, and sugar into the pan, and stir to combine. Cover and simmer, stirring occasionally, approximately 30 to 40 minutes."]'
      },
      {
        id: 21,
        code: '6a4taus937a222',
        likes: 40,
        name: 'Bow Ties with Sausage, Tomatoes and Cream',
        description: 'A friend gave this recipe to me a few years back, and my family can\'t seem to get enough of it. It sounds strange with cream in it, but that just enhances the flavor and texture. This is a very easy recipe.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/122627.jpg',
        user_id: 3,
        created_at: new Date('2016-08-03 14:26:16 UTC'),
        updated_at: new Date('2016-08-03 14:26:16 UTC'),
        ingredients: '["1 (12 ounce) package bow tie pasta","2 tablespoons olive oil","1 pound sweet Italian sausage, casings removed and crumbled","1/2 teaspoon red pepper flakes","1/2 cup diced onion","3 cloves garlic, minced","1 (28 ounce) can Italian-style plum tomatoes, drained and coarsely chopped","1 1/2 cups heavy cream","1/2 teaspoon salt","3 tablespoons minced fresh parsley"]',
        instructions: '["Bring a large pot of lightly salted water to a boil. Cook pasta in boiling water for 8 to 10 minutes, or until al dente; drain.","Heat oil in a large, deep skillet over medium heat. Cook sausage and pepper flakes until sausage is evenly brown. Stir in onion and garlic, and cook until onion is tender. Stir in tomatoes, cream, and salt. Simmer until mixture thickens, 8 to 10 minutes.","Stir cooked pasta into sauce, and heat through. Sprinkle with parsley."]'
      },
      {
        id: 22,
        code: '6a4tau2762ty22',
        likes: 26,
        name: 'Baked Salmon',
        description: 'This is a great recipe for beginners! This was my first time making fish and it was a hit. Even my 9 year old daughter who wouldn\'t dream of eating fish EVER had half of my portion!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/593567.jpg',
        user_id: 4,
        created_at: new Date('2016-08-01 14:26:16 UTC'),
        updated_at: new Date('2016-08-01 14:26:16 UTC'),
        ingredients: '["2 cloves garlic, minced","6 tablespoons light olive oil","1 teaspoon dried basil","1 teaspoon salt","1 teaspoon ground black pepper","1 tablespoon lemon juice","1 tablespoon fresh parsley, chopped","2 (6 ounce) fillets salmon"]',
        instructions: '["In a medium glass bowl, prepare marinade by mixing garlic, light olive oil, basil, salt, pepper, lemon juice and parsley. Place salmon fillets in a medium glass baking dish, and cover with the marinade. Marinate in the refrigerator about 1 hour, turning occasionally.","Preheat oven to 375 degrees F (190 degrees C).","Place fillets in aluminum foil, cover with marinade, and seal. Place sealed salmon in the glass dish, and bake 35 to 45 minutes, until easily flaked with a fork."]'
      },
      {
        id: 23,
        code: 'ytyauwi155234',
        likes: 42,
        name: 'Artichoke & Spinach Dip Restaurant Style',
        description: 'Tastes very similar to ones served in chain restaurants in our area. This one uses refrigerated Alfredo sauce as its base to give it a wonderful creamy texture.',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/2073139.jpg',
        user_id: 5,
        created_at: new Date('2016-08-05 14:20:16 UTC'),
        updated_at: new Date('2016-08-05 14:20:16 UTC'),
        ingredients: '["4 cloves garlic","1 (10 ounce) package frozen chopped spinach, thawed and drained","1 (14 ounce) can artichoke hearts, drained and chopped","1 (10 ounce) container Alfredo-style pasta sauce","1 cup shredded mozzarella cheese","1/3 cup grated Parmesan cheese","1/2 (8 ounce) package cream cheese, softened"]',
        instructions: '["Preheat oven to 350 degrees F (175 degrees C).","Place garlic in a small baking dish. Bake in the preheated oven 20 to 30 minutes, until soft. Remove from heat. When cool enough to touch, squeeze softened garlic from skins.","In an 8x8 inch baking dish, spread the roasted garlic, spinach, artichoke hearts, Alfredo-style pasta sauce, mozzarella cheese, Parmesan cheese, and cream cheese.","Bake in the preheated oven 30 minutes, or until cheeses are melted and bubbly. Serve warm."]'
      },
      {
        id: 24,
        code: 'y727hsnba234',
        likes: 54,
        name: 'Extreme Chocolate Cake',
        description: 'A rich moist chocolate cake with a chocolate buttercream icing. This is the best cake in the world!',
        img_url: 'http://images.media-allrecipes.com/userphotos/720x405/693494.jpg',
        user_id: 6,
        created_at: new Date('2016-08-05 14:21:16 UTC'),
        updated_at: new Date('2016-08-05 14:21:16 UTC'),
        ingredients: '["2 cups white sugar","1 3/4 cups all-purpose flour","3/4 cup unsweetened cocoa powder","1 1/2 teaspoons baking soda","1 1/2 teaspoons baking powder","1 teaspoon salt","2 eggs","1 cup milk","1/2 cup vegetable oil","2 teaspoons vanilla extract","1 cup boiling water","3/4 cup butter","1 1/2 cups unsweetened cocoa powder","5 1/3 cups confectioners\' sugar","2/3 cup milk","1 teaspoon vanilla extract"]',
        instructions: '["Preheat oven to 350 degrees F (175 degrees C). Grease and flour two 9 inch cake pans.","Use the first set of ingredients to make the cake. In a medium bowl, stir together the sugar, flour, cocoa, baking soda, baking powder and salt. Add the eggs, milk, oil and vanilla, mix for 3 minutes with an electric mixer. Stir in the boiling water by hand. Pour evenly into the two prepared pans.","Bake for 30 to 35 minutes in the preheated oven, until a toothpick inserted comes out clean. Cool for 10 minutes before removing from pans to cool completely.","To make the frosting, use the second set of ingredients. Cream butter until light and fluffy. Stir in the cocoa and confectioners\' sugar alternately with the milk and vanilla. Beat to a spreading consistency.","Split the layers of cooled cake horizontally, cover the top of each layer with frosting, then stack them onto a serving plate. Frost the outside of the cake."]'
      }
    ])
  )
  .then(() => {
    return knex.raw(
      "SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes));"
    );
  });
};
