export const earnData = [
    {
      category: "Ice Youtube",
      tasks: [
        {
          title: "Create Jetton (Token) on TON",
          points: 5000,
          image: "youtube",
          description: "In this video, you'll learn how to create a Jetton on the TON Blockchain using a ready-to-use project on GitHub.",
          callToAction: "Watch video",
          type: "VISIT",
          taskData: {
            link: "https://youtube.com/watch?v=example1"
          },
          isActive: true  
        },
        {
          title: "How to Make a Notcoin Clone",
          points: 5000,
          image: "youtube",
          description: "In this video, you'll be guided through the process of creating a clone of the famous Notcoin app.",
          callToAction: "Watch video",
          type: "VISIT",
          taskData: {
            link: "https://youtube.com/watch?v=example2"
          },
          isActive: true  
        },
      ]
    },
    {
      category: "Tasks list",
      tasks: [
        {
          title: "Join Clicker Game News / Updates",
          points: 5000,
          image: "telegram",
          description: "Stay updated with the latest news and announcements by joining Clicker news Telegram channel.",
          callToAction: "Join channel",
          type: "TELEGRAM",
          taskData: {
            link: "https://t.me/clicker_game_news",
            chatId: "clicker_game_news"
          },
          isActive: true  
        },
        {
          title: "Follow Nikandr's X",
          points: 5000,
          image: "twitter",
          description: "Follow us on X (formerly Twitter) for real-time updates and community engagement.",
          callToAction: "Follow on X",
          type: "VISIT",
          taskData: {
            link: "https://twitter.com/example_account"
          },
          isActive: true  
        },
        {
          title: "Invite 3 friends",
          points: 25000,
          image: "friends",
          description: "Invite your friends to join the Ice community and earn bonus points for each successful referral.",
          callToAction: "Invite friends",
          type: "REFERRAL",
          taskData: {
            friendsNumber: 3
          },
          isActive: true  
        }
      ]
    },
  ];