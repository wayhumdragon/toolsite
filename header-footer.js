// 加载公共头部
fetch('/header.html')
    .then(res => res.text())
    .then(html => {
        const placeholder = document.getElementById('header-placeholder');
        if (placeholder) placeholder.innerHTML = html;
    });

// 加载公共页脚
fetch('/footer.html')
    .then(res => res.text())
    .then(html => {
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) placeholder.innerHTML = html;
    });