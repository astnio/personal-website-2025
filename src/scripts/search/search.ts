import Fuse from 'fuse.js';

document.addEventListener('astro:page-load', () => {
  let searchData: any[] = [];
  let fuseInstance: any = undefined;
  const fuseOptions = {
    includeScore: true,
    shouldSort: true,
    keys: [
      // Blog Keys
      {
        name: 'title',
        weight: 0.75,
      },
      {
        name: 'summary',
        weight: 0.5,
      },
      {
        name: 'tags',
        weight: 0.4,
      },
      {
        name: 'topic',
        weight: 0.3,
      },
      {
        name: 'category',
        weight: 0.2,
      },

      // Project Keys
      {
        name: 'description',
        weight: 0.6,
      },
      {
        name: 'status',
        weight: 0.4,
      },
      {
        name: 'type',
        weight: 0.3,
      },

      // Job Keys
      {
        name: 'company',
        weight: 0.6,
      },
      {
        name: 'skills',
        weight: 0.5,
      },
      {
        name: 'description',
        weight: 0.4,
      },
    ],
  };

  const search = document.getElementById('search')! as HTMLInputElement;
  const searchReadout = document.getElementById('search-readout')!;
  const searchResultOutput = document.getElementById('search-results')!;

  const urlParams = new URLSearchParams(window.location.search)
    .get('q')
    ?.toString();

  function updateDocumentTitle(search: string) {
    document.title = search
      ? `Search results for "${search}"`
      : `Search the site`;
  }

  function updateSearchReadout(searchReadout: HTMLElement, search: string) {
    searchReadout.textContent = search
      ? `Search results for "${search}"`
      : ``;
  }

  function updateSearchPageURL(search: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('q', search);
    window.history.replaceState(null, '', url);
  }

  function generateSearchList(results: any) {
    return results
      .map((result: any) => {
        const { title, date, slug, source } = result.item;
        const dateAsDate = new Date(date);

        let link = '';
        switch (source) {
          case 'blog':
            link = `/blog/${slug}`;
            break;
          case 'projects':
            link = `/projects/${slug}`;
            break;
          case 'jobs':
            link = `/about`;
            break;
        }
        return `
          <li>
              <h3>${title}</h3>
              <p>${dateAsDate}</p>
              <a href='${link}'>View Post</a>
          </li>
      `;
      })
      .join('');
  }

  async function fetchSearchResults(search: string) {
    const spinner = document.getElementById('spinner');

    if (search.length === 0) return;

    spinner?.setAttribute('data-active', 'true');

    if (searchData.length === 0) {
      try {
        const res = await fetch('/search.json');
        if (!res.ok) {
          throw new Error('"search.json" not found!');
        }
        const data = await res.json();

        searchData = data;
      } catch (error) {
        console.error(error);
      }
    }

    if (searchData.length && !fuseInstance) {
      fuseInstance = new Fuse(searchData, fuseOptions);
    }

    if (!fuseInstance) return;

    const searchResult = fuseInstance.search(search);

    spinner?.setAttribute('data-active', 'false');

    searchResultOutput.innerHTML =
      searchResult.length > 0
        ? generateSearchList(searchResult)
        : `No results found.`;
  }

  function initSearchPage() {
    fetchSearchResults(urlParams!.toString());
    updateDocumentTitle(urlParams!.toString());
    updateSearchReadout(searchReadout, urlParams!.toString());

    search.value = urlParams?.toString()!;
    search.focus();
  }

  search.addEventListener('input', () => {
    const searchTerm = search.value;
    fetchSearchResults(searchTerm);
    updateDocumentTitle(searchTerm);
    updateSearchReadout(searchReadout, searchTerm);
    updateSearchPageURL(searchTerm);
  });

  initSearchPage();
});