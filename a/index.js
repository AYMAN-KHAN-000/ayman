// All the frames of your title animation:
const frames = [
    "@",
    "@A",
    "@AY",
    "@AYM",
    "@AYMA",
    "@AYMAN",
    "@AYMAN K",
    "@AYMAN KH",
    "@AYMAN KHA",
    "@AYMAN KHAN",
    "@AYMAN KHA",
    "@AYMAN KH",
    "@AYMAN K",
    "@AYMAN ",
    "@AYMAN",
    "@AYMA",
    "@AYM",
    "@AY",
    "@A",
  ];
  
  let idx = 0;
  
  function updateTitle() {
   
    document.title = frames[idx] || "\u00A0";
  
    
    idx = (idx + 1) % frames.length;
  
    
    setTimeout(updateTitle, 200);
  }

  updateTitle();

  
