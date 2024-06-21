document.querySelectorAll('.list-item').forEach(item => {
    item.addEventListener('click', function() {
     
        document.querySelectorAll('.list-item').forEach(i => i.classList.remove('active'));
      
        item.classList.add('active');
 
        document.querySelectorAll('.example-image').forEach(img => img.style.display = 'none');
        
        const imageId = item.getAttribute('data-target');
        document.getElementById(imageId).style.display = 'block';
    });
});