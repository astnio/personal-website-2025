function getLink(result: any) {
  let link = '';
  switch (result.source) {
    case 'blog':
      link = `/blog/${result.slug}`;
      break;
    case 'projects':
      link = `/projects/${result.slug}`;
      break;
    case 'jobs':
      link = `/about`;
      break;
  }
  return link;
}

function formatDate(result: any) {
  const resultDate = new Date(result.date);
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return resultDate.toLocaleDateString('en-US', dateOptions);
}

export default function resultTemplate(result: any) {
  const date = formatDate(result);
  const link = getLink(result);

  return /*html*/ `
    <li class='search-result-item'>
        <a href='${link}'>
          <h3>${result.title}</h3>              
        </a>
        <time>${date}</time>
        <p>${result.description}</p>
        <a href='${link}'>View Post</a>
    </li>
`;
}
