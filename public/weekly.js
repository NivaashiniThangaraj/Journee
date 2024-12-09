// Add a sticker to the canvas
function addSticker(e) {
    const canvas = document.getElementById('journalCanvas');
  
    // Create the sticker container
    const sticker = document.createElement('div');
    sticker.classList.add('sticker-container');
    sticker.style.position = 'absolute';
    sticker.style.top = `${e.clientY - canvas.offsetTop - 50}px`;
    sticker.style.left = `${e.clientX - canvas.offsetLeft - 50}px`;
    sticker.style.width = '100px';
    sticker.style.height = '100px';
  
    // Create sticker image
    const img = document.createElement('img');
    img.src = e.target.src;
    img.classList.add('sticker-image');
    img.style.width = '100%';
    img.style.height = '100%';
    sticker.appendChild(img);
  
    // Add delete button
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.onclick = () => sticker.remove(); // Remove the sticker on clicking the delete button
    sticker.appendChild(deleteBtn);
  
    // Add resize handle
    const resizeHandle = document.createElement('div');
    resizeHandle.classList.add('resize-handle');
    sticker.appendChild(resizeHandle);
  
    // Append to canvas
    canvas.appendChild(sticker);
  
    // Enable dragging
    makeDraggable(sticker);
  
    // Enable resizing
    makeResizable(sticker, resizeHandle);
  }
  
  // Enable dragging for a sticker
  function makeDraggable(element) {
    let offsetX = 0, offsetY = 0, isDragging = false;
  
    element.addEventListener('mousedown', (e) => {
      if (!e.target.classList.contains('resize-handle') && !e.target.classList.contains('delete-btn')) {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        element.style.zIndex = 1000; // Bring to the front
      }
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        element.style.left = `${e.clientX - offsetX}px`;
        element.style.top = `${e.clientY - offsetY}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isDragging = false;
      element.style.zIndex = ''; // Reset z-index
    });
  }
  
  // Enable resizing for a sticker (via resize handle)
  function makeResizable(element, handle) {
    let isResizing = false;
  
    handle.addEventListener('mousedown', (e) => {
      isResizing = true;
      e.stopPropagation(); // Prevent triggering drag
    });
  
    document.addEventListener('mousemove', (e) => {
      if (isResizing) {
        const rect = element.getBoundingClientRect();
        element.style.width = `${e.clientX - rect.left}px`;
        element.style.height = `${e.clientY - rect.top}px`;
      }
    });
  
    document.addEventListener('mouseup', () => {
      isResizing = false;
    });
  }
  
  // Change canvas background theme
  function changeCanvas(theme) {
    const canvas = document.getElementById('journalCanvas');
    if (theme === 'theme1') {
      canvas.style.backgroundImage = "url('./images/theme1.png')";
    } else if (theme === 'theme2') {
      canvas.style.backgroundImage = "url('./images/theme2.png')";
    } else if (theme === 'theme3') {
      canvas.style.backgroundImage = "url('./images/theme3.png')";
    }
  }
  
  // Change font style dynamically
  function changeFontStyle() {
    const selectedFont = document.getElementById('fontSelector').value;
    document.getElementById('journalCanvas').style.fontFamily = selectedFont;
  }
  
  // Mock voice recorder
  function startRecording() {
    alert("Recording started. (Voice processing mockup)");
  }
  
  // Deselect stickers when clicking outside them
  document.getElementById('journalCanvas').addEventListener('click', (e) => {
    if (!e.target.closest('.sticker-container')) {
      document.querySelectorAll('.sticker-container').forEach((sticker) => {
        sticker.classList.remove('selected');
      });
    }
  });
  