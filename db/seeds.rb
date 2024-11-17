# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Record.create!(title: 'blue album', description: 'loud garage rock', user_id: 1, image: "weezer.jpg")
# Record.create!(title: 'Kid A', description: 'rock and roll', user_id: 1, image: "kida.jpg")
 Record.create!(title: 'neutral milk hotel', description: '1st album', user_id: 1, image: "neutralmilkhotel.jpg")
 Record.create!(title: 'seargent pepper', description: 'oldies psychadelic', user_id: 1, image: "sgtpepper.jpg") 
 Record.create!(title: 'theband', description: 'good sound', user_id: 1, image: "theband.jpg") 
 Record.create!(title: 'thewand', description: 'the flaming lips funky psychadelic rock', user_id: 1, image: "thewand.jpg") 

Record.create!(title: 'bowie', description: 'old school', user_id: 2, image: "davidbowie.jpg") 
Record.create!(title: 'velvetunderground', description: 'good sound', user_id: 3, image: "andywarhol.jpg") 
Record.create!(title: 'alt j', description: 'good sound', user_id: 3, image: "altj.jpg") 