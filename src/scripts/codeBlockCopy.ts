document.addEventListener('astro:page-load', () => {
  let codeBlocks = Array.from(document.querySelectorAll('pre'));

  let animationTimeout: any = null;
  let isAnimating = false;

  function resetAnimation(copyLabel: any) {
    copyLabel.style.animation = 'none';
    copyLabel.offsetHeight;
    copyLabel.style.animation = null;
    copyLabel.style.animationPlayState = 'paused';
    isAnimating = false;
  }

  function startAnimation(copyLabel: any) {
    if (isAnimating) {
      clearTimeout(animationTimeout);
      resetAnimation(copyLabel);
    }

    isAnimating = true;
    copyLabel.style.animationPlayState = 'running';

    animationTimeout = setTimeout(() => {
      resetAnimation(copyLabel);
    }, 2000);
  }

  for (let codeBlock of codeBlocks) {
    let wrapper = document.createElement('div');
    wrapper.className = 'btn-copy-wrapper';

    let copyLabel = document.createElement('p');
    copyLabel.className = 'btn-copied-label';
    copyLabel.innerText = 'Copied';

    let copyButton = document.createElement('button');
    copyButton.className = 'btn-copy';
    copyButton.title = 'Copy';

    let copyButtonIcon = document.createElement('span');
    copyButtonIcon.className = 'copy-code-icon bx bxs-copy-alt';

    wrapper.appendChild(copyLabel);
    wrapper.appendChild(copyButton);
    copyButton.appendChild(copyButtonIcon);

    codeBlock.setAttribute('tabindex', '0');

    codeBlock.appendChild(wrapper);

    codeBlock.style.position = 'relative';

    copyButton.addEventListener('click', async () => {
      await copyCode(codeBlock, copyButton);
      startAnimation(copyLabel);
    });
  }

  async function copyCode(block: any, button: any) {
    let code = block.querySelector('code');
    let text = code.innerText;

    await navigator.clipboard.writeText(text);
  }
});
