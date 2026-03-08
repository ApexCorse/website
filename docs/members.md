# Guide: Managing members inside the _Team Page_

All the members' data is stored inside [`src/data/members.json`](../src/data/members.json), each being a JSON object having certain fields.

When adding/removing members or modifying data, make sure you respect the following mandatory structure:

```json
{
    "name": <member_full_name>,
    "department": <department>,
    "leader": <bool>(optional),
    "linkedin": <url>,
    "email": <email>,
    "image": <image_filename> (without extension, optional),
    "course": <course>,
    "role": <role> (optional)
}
```

> [!NOTE]
> The relative order of the members of the same department counts.
