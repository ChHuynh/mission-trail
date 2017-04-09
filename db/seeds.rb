# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# game = Game.create(username: "Ronin", fomo: 20, battery: 20, time: 120, money: 35, occupation: "Yoga Instructor")



event = Event.create(name: "ex-girlfriend", text: "You run into your ex with their new boo. They are having such a good time without you. What do you do?", image_url: "assets/starwar.png", attr_change_id: 1)
event.save
insta_event1 = Event.create(name: "good-insta", text: "You have 11 Insta likes. You are happy.", attr_change_id: 3)
insta_event2 = Event.create(name: "bad-insta", text: "You have 3 Instagram likes. Sucks to be you.", attr_change_id: 2)

tinder_event1 = Event.create(name: "good-tinder", text: "You have a hot coconut water date with a hot yoga instructor.", attr_change_id: 3)
tinder_event2 = Event.create(name: "neutral-tinder", text: "You have no new Tinder matches.", attr_change_id: 1)
tinder_event3 = Event.create(name: "bad-tinder", text: "You text a hot match and you get a reply saying 'new phone who dis?'", attr_change_id: 2)

option1 = Option.create(text: "Hide behind a compost bin", event_id: event.id)
option2 = Option.create(text: "Engage in awkward conversation", event_id: event.id)
option3 = Option.create(text: "Disappear behind a cloud of Dragonfruit vape smoke", event_id: event.id)
option4 = Option.create(text: "Kick them and make them drop their coconut water and run", event_id: event.id)

attr_change1 = AttrChange.create(fomo_change: 0, battery_change: 0, time_change: -5, money_change: 0)
attr_change2 = AttrChange.create(fomo_change: 5, battery_change: 0, time_change: -5, money_change: 0)
attr_change3 = AttrChange.create(fomo_change: -5, battery_change: 0, time_change: -5, money_change: 0)

result1 = Result.create(text: "You hid behind a compost bin. Nice move, Slick.", option_id: option1.id, attr_change_id: attr_change1.id, event_id: event.id)
result2 = Result.create(text: "Well, that was awkward.", option_id: option2.id, attr_change_id: attr_change1.id, event_id: event.id)
result3 = Result.create(text: "You disappeared behind a cloud of Dragonfruit vape smoke. That was so tight!", option_id: option3.id, attr_change_id: attr_change2.id, event_id: event.id)
result4 = Result.create(text: "You kicked them and ran! Serves 'em right! That relationship was the worst two weeks ever!", option_id: option4.id, attr_change_id: attr_change2.id, event_id: event.id)








