async function getData(response: Response) {
  try {
    const contentType = response.headers.get('content-type');
    const data =
      contentType && contentType.indexOf('application/json') !== -1
        ? await response.json()
        : await response.text();

    return data;
  } catch (error) {
    return null;
  }
}

export async function fetchData<DATA>(fetchUrl: string, init?: RequestInit) {
  const response = await fetch(fetchUrl, init);
  const data = await getData(response);

  if (response.ok) {
    return {
      data: (data as DATA) || null,
      headers: response.headers,
      status: response.status,
    };
  }

  return {
    error: data as string,
    status: response.status,
    headers: response.headers,
    url: response.url,
  };
}
