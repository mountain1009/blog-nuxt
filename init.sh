rm -rf content/articles
mkdir content/articles

max=10
for ((i=1; i < $max; i++)); do
    cat <<EOF >> content/articles/$i.md
---
title: Introduction-$i
description: Learn how to use @nuxt/content.
---

# Introduction-$i
EOF
done
