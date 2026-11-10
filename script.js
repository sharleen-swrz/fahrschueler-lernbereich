document.querySelector(".classes").addEventListener("click", event => {
    const button = event.target.closest(".video-start");
    if (!button) return;
    const player = button.closest(".video-player");
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${player.dataset.videoId}?autoplay=1&playsinline=1`;
    frame.title = button.querySelector("strong").textContent + " – Führerscheinklasse B";
    frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    player.replaceChildren(frame);
    frame.focus();
});
