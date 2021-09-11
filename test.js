var test = require('tape')
var get = require('.')

// Example video from https://support.google.com/youtube/answer/9884579
// https://www.youtube.com/watch?v=t67_zAg5vvI
test('lawful', function (t) {
  var chapters = get(`
Where will they be in 10 years? What was their first YouTube video camera set up? Watch your fave creators dish it all out during VidCon 2019!

AdelaineMorin - https://www.youtube.com/user/C0OK1EMO...
Kyle Hanagami - https://www.youtube.com/user/kylehana...
Dormtainment - https://www.youtube.com/user/Dormtain...
Amber Scholl - https://www.youtube.com/user/PopppDivaaa
Kelsey Impicciche - https://www.youtube.com/user/keepcalm...
Nick Eh 30 - https://www.youtube.com/channel/UCt9n...
Aaron’sAnimals - https://www.youtube.com/channel/UCNo5...
Zach King - https://www.youtube.com/user/ZachKing...
Molly Burke - https://www.youtube.com/user/MollyBur...
The Fitness Marshall - https://www.youtube.com/user/TheFitne...
Curly Velasquez - https://www.youtube.com/user/iwouldcr...
FunForLouis - https://www.youtube.com/user/FunForLouis
CloeCouture - https://www.youtube.com/user/CloeCouture
Collins Key - https://www.youtube.com/user/CollinsKey
Devan Key - https://www.youtube.com/user/devan11art
Shalom Blac - https://www.youtube.com/channel/UCHdb...
TheSorryGirls - https://www.youtube.com/user/TheSorry...
Natalies Outlet - https://www.youtube.com/user/natalies...
Pautips - https://www.youtube.com/user/Pautips
Dominic DeAngelis - https://www.youtube.com/user/THEKansa...
Jarvis Johnson - https://www.youtube.com/user/VSympathyV
Shameless Maya - https://www.youtube.com/user/shameles...
AsapScience - https://www.youtube.com/user/AsapSCIENCE

#VidCon #VidCon2019

Chapters:
0:00 Intro
0:21 Who were you ten years ago?
1:00 How would you describe yourself as a creator?
1:25 Where do you see yourself in ten years? 
2:05 Best fan experience at Vidcon?
2:47 What's the first YouTube video you watched?
3:22 Which YouTube creator will be an icon in ten years?
4:05 What's your YouTube video guilty pleasure?
4:55 Describe your very first video capture set-up
5:39 If you weren't a creator what would you do?
6:05 What would your fans be surprised to learn about you?
6:31 How do you want to be remembered?
6:57 What do you hope changes and stays the same in ten years?
  `)

  t.deepEqual(chapters, [
    { start: 0, title: 'Intro' },
    { start: 21, title: 'Who were you ten years ago?' },
    { start: 60, title: 'How would you describe yourself as a creator?' },
    { start: 85, title: 'Where do you see yourself in ten years?' },
    { start: 125, title: 'Best fan experience at Vidcon?' },
    { start: 167, title: "What's the first YouTube video you watched?" },
    { start: 202, title: 'Which YouTube creator will be an icon in ten years?' },
    { start: 245, title: "What's your YouTube video guilty pleasure?" },
    { start: 295, title: 'Describe your very first video capture set-up' },
    { start: 339, title: "If you weren't a creator what would you do?" },
    { start: 365, title: 'What would your fans be surprised to learn about you?' },
    { start: 391, title: 'How do you want to be remembered?' },
    { start: 417, title: 'What do you hope changes and stays the same in ten years?' }
  ])
  t.end()
})

test('lawful 2', function (t) {
  var chapters = get(`
Chapters:
00:00 Intro
00:21 Who were you ten years ago?
01:00 How would you describe yourself as a creator?
01:25 Where do you see yourself in ten years?
02:05 Best fan experience at Vidcon?
02:47 What's the first YouTube video you watched?
03:22 Which YouTube creator will be an icon in ten years?
04:05 What's your YouTube video guilty pleasure?
04:55 Describe your very first video capture set-up
05:39 If you weren't a creator what would you do?
06:05 What would your fans be surprised to learn about you?
06:31 How do you want to be remembered?
06:57 What do you hope changes and stays the same in ten years?
  `)

  t.deepEqual(chapters, [
    { start: 0, title: 'Intro' },
    { start: 21, title: 'Who were you ten years ago?' },
    { start: 60, title: 'How would you describe yourself as a creator?' },
    { start: 85, title: 'Where do you see yourself in ten years?' },
    { start: 125, title: 'Best fan experience at Vidcon?' },
    { start: 167, title: "What's the first YouTube video you watched?" },
    { start: 202, title: 'Which YouTube creator will be an icon in ten years?' },
    { start: 245, title: "What's your YouTube video guilty pleasure?" },
    { start: 295, title: 'Describe your very first video capture set-up' },
    { start: 339, title: "If you weren't a creator what would you do?" },
    { start: 365, title: 'What would your fans be surprised to learn about you?' },
    { start: 391, title: 'How do you want to be remembered?' },
    { start: 417, title: 'What do you hope changes and stays the same in ten years?' }
  ])
  t.end()
})

// https://www.youtube.com/watch?v=W750EAMapXg
test('postfix', function (t) {
  var chapters = get(`
2nd album by korean artist 'Mid-Air Thief'.
Genre: Folktronica, Neo-Psychedelia, Psychedelic Pop

1. 왜? (Why?) 0:00
2. 쇠사슬 (Ahhhh, These Chains!) 4:42
3. 감은 듯 (Gameun Deut) 9:49
4. 곡선과 투과광 (Curve and Light) 14:54
5. 함께 무너지기 (Crumbling Together) 19:14
6. 수호자 (Protector) 28:53
7. 흙 (Dirt) 34:16
8. 무소식 (No Answer) 40:38
  `)

  t.deepEqual(chapters, [
    { start: 0, title: '왜? (Why?)' },
    { start: 282, title: '쇠사슬 (Ahhhh, These Chains!)' },
    { start: 589, title: '감은 듯 (Gameun Deut)' },
    { start: 894, title: '곡선과 투과광 (Curve and Light)' },
    { start: 1154, title: '함께 무너지기 (Crumbling Together)' },
    { start: 1733, title: '수호자 (Protector)' },
    { start: 2056, title: '흙 (Dirt)' },
    { start: 2438, title: '무소식 (No Answer)' }
  ])
  t.end()
})

// https://www.youtube.com/watch?v=cJ1yFhjRnNc
test('postfix 2', function (t) {
  var chapters = get(`
Joanna Newsom - Ys (Full Album)

Tracks

01. Emily 00:00
02. Monkey & Bear 12:08
03. Sawdust and Diamonds 21:37
04. Only Skin 31:33
05. Cosmia 48:26
  `)

  t.deepEqual(chapters, [
    { start: 0, title: 'Emily' },
    { start: 728, title: 'Monkey & Bear' },
    { start: 1297, title: 'Sawdust and Diamonds' },
    { start: 1893, title: 'Only Skin' },
    { start: 2906, title: 'Cosmia' }
  ])
  t.end()
})

// https://www.youtube.com/watch?v=LEVI37XfL8Q
test('postfix parens', function (t) {
  var chapters = get(`
“Migration” full album by Bonobo :
https://bonobomusic.bandcamp.com/albu...

Tracklist: 
1. Migration (00:00 )
2. Break Apart (teat. Rhye) (05:28)
3. Outlier (10:03 )
4. Grains (17:58 )
5. Second Sun (22:27)
6. Surface (feat. Nicole Miglis) (26:11)
7. Bambro Koyo Ganda (feat. Innov Gnawa) (30:22)
8. Kerala (35:24)
9. Ontario (39:22)
10. No Reason (feat. Nick Murphy) (43:15)
11. 7th Sevens (50:44)
12. Figures (55:52)

Follow Bonobo 
Facebook: https://bonobo.lnk.to/profile/facebook
Twitter: https://bonobo.lnk.to/profile/twitter
Instagram: https://bonobo.lnk.to/profile/instagram
Soundcloud: https://bonobo.lnk.to/profile/soundcloud
Spotify: https://bonobo.lnk.to/profile/spotify
Apple Music: https://bonobo.lnk.to/profile/applemusic
Youtube: https://bonobo.lnk.to/profile/youtube

Follow The Daily Dose 💿
Subscribe : https://bit.ly/2ihgySs
Instagram : https://bit.ly/3ePVjV6 
Spotify : https://spoti.fi/356U6UP
Facebook : https://bit.ly/356LcGV

Send me your music : https://www.submithub.com/blog/the-da...

We don't own the rights of some uploaded songs, contact us if you want us to delete a video
listplay.contact@gmail.com
  `)

  t.deepEqual(chapters, [
    { start: 0, title: 'Migration' },
    { start: 328, title: 'Break Apart (teat. Rhye)' },
    { start: 603, title: 'Outlier' },
    { start: 1078, title: 'Grains' },
    { start: 1347, title: 'Second Sun' },
    { start: 1571, title: 'Surface (feat. Nicole Miglis)' },
    { start: 1822, title: 'Bambro Koyo Ganda (feat. Innov Gnawa)' },
    { start: 2124, title: 'Kerala' },
    { start: 2362, title: 'Ontario' },
    { start: 2595, title: 'No Reason (feat. Nick Murphy)' },
    { start: 3044, title: '7th Sevens' },
    { start: 3352, title: 'Figures' }
  ])
  t.end()
})

// this is currently not supported by youtube
// https://www.youtube.com/watch?v=Xw5AiRVqfqk
test('prefix', function (t) {
  var chapters = get(`
320kbps
1. 0:00 Xtal
2. 4:53 Tha
3. 14:01 Pulsewidth
4. 17:49 Ageispolis
5. 23:13 I
6. 24:29 Green Calx
7. 30:35 Heliosphan
8. 35:29 We Are The Music Makers
9. 43:13 Schottkey 7th Path
10. 48:21 Ptolemy
11. 55:35 Hedphelym
12. 1:01:39 Delphium
13. 1:07:09 Actium
  `, { extended: true })

  t.deepEqual(chapters, [
    { start: 0, title: 'Xtal' },
    { start: 293, title: 'Tha' },
    { start: 841, title: 'Pulsewidth' },
    { start: 1069, title: 'Ageispolis' },
    { start: 1393, title: 'I' },
    { start: 1469, title: 'Green Calx' },
    { start: 1835, title: 'Heliosphan' },
    { start: 2129, title: 'We Are The Music Makers' },
    { start: 2593, title: 'Schottkey 7th Path' },
    { start: 2901, title: 'Ptolemy' },
    { start: 3335, title: 'Hedphelym' },
    { start: 3699, title: 'Delphium' },
    { start: 4029, title: 'Actium' }
  ])
  t.end()
})

// this is currently not supported by youtube, and also not by us :)
// https://www.youtube.com/watch?v=fZlNt05dCX8
test.skip('prefix dash', function (t) {
  var chapters = get(`
Velocity : Design : Comfort is the second album from Sweet Trip, released in 2003 via the Darla Records imprint. 

→ https://darla.com/products/sweet-trip...
→ https://sweettrip.bandcamp.com/album/...
→ https://soundcloud.com/wotf
→ https://soundcloud.com/valeriecooper

Genres: Glitch Pop, IDM, Shoegaze.

Roby Burgos－instruments, programming, voice.
Valerie Cooper－ voice.
Aaron Porter－tablas on 'sept.'
Sue Mee－voice on '...dancers...'

Written, produced and mixed by Sweet Trip. Mastered by Kevin Bartley. Design by Elle and Fortunato.

====================================

Track listing:

01. 00:00 － tekka
02. 03:09 － dsco
03. 06:20 － velocity
04. 14:55 － fruitcake and cookies
05. 22:54 － sept
06. 31:20 － pro : lov : ad
07. 37:06 － design : 1
08. 40:39 － international
09. 51:02 － dedicated
10. 56:52 － chocolate matter
11. 01:00:49 － to all the dancers of the world, a round form of fantasy
12. 01:07:14 － design : 2 : 3
  `, { extended: true })

  t.deepEqual(chapters, [
    { start: 0, title: 'tekka' },
    { start: 189, title: 'dsco' },
    { start: 380, title: 'velocity' },
    { start: 895, title: 'fruitcake and cookies' },
    { start: 1374, title: 'sept' },
    { start: 1880, title: 'pro : lov : ad' },
    { start: 2226, title: 'design : 1' },
    { start: 2439, title: 'international' },
    { start: 3062, title: 'dedicated' },
    { start: 3412, title: 'chocolate matter' },
    { start: 3649, title: 'to all the dancers of the world, a round form of fantasy' },
    { start: 4034, title: 'design : 2 : 3' }
  ])
  t.end()
})
