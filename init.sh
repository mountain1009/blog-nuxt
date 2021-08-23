rm -rf content/articles
mkdir content/articles

max=84
for ((i=1; i < $max; i++)); do
    cat <<EOF >> content/articles/$i.md
---
title: Introduction-$i
description: Learn how to use @nuxt/content.
image: $i.jpg
---

# Introduction-$i

<article-image name="$i.jpg" alt="サンプル画像"></article-image>
EOF
done
