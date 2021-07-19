workspace(
    name = "mc-manager",
    # managed_directories = {"@npm": ["frontend/node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
http_archive(
    name = "rules_python",
    sha256 = "778197e26c5fbeb07ac2a2c5ae405b30f6cb7ad1f5510ea6fdac03bded96cc6f",
    urls = [
        "https://mirror.bazel.build/github.com/bazelbuild/rules_python/releases/download/0.2.0/rules_python-0.2.0.tar.gz",
        "https://github.com/bazelbuild/rules_python/releases/download/0.2.0/rules_python-0.2.0.tar.gz",
    ],
)

load("@rules_python//python:pip.bzl", "pip_install")
pip_install(
    name = "worker_deps",
    requirements="//worker:requirements.txt"
)
pip_install(
    name = "api_deps",
    requirements="//api:requirements.txt"
)

http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "59d5b42ac315e7eadffa944e86e90c2990110a1c8075f1cd145f487e999d22b3",
    strip_prefix = "rules_docker-0.17.0",
    urls = ["https://github.com/bazelbuild/rules_docker/releases/download/v0.17.0/rules_docker-v0.17.0.tar.gz"],
)

load(
    "@io_bazel_rules_docker//repositories:repositories.bzl",
    container_repositories = "repositories",
)
container_repositories()

load("@io_bazel_rules_docker//repositories:deps.bzl", container_deps = "deps")

container_deps()

load("@io_bazel_rules_docker//container:pull.bzl", "container_pull")

container_pull(
    name = "py3_alpine",
    registry = "index.docker.io",
    repository = "library/python",
    tag = "3.9-alpine",
)

load(
    "@io_bazel_rules_docker//python3:image.bzl",
    _py_image_repos = "repositories",
)

_py_image_repos()

# http_archive(
#     name = "build_bazel_rules_nodejs",
#     sha256 = "0fa2d443571c9e02fcb7363a74ae591bdcce2dd76af8677a95965edf329d778a",
#     urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.6.0/rules_nodejs-3.6.0.tar.gz"],
# )

# http_archive(
#     name = "bazel_skylib",
#     sha256 = "97e70364e9249702246c0e9444bccdc4b847bed1eb03c5a3ece4f83dfe6abc44",
#     urls = [
#         "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz",
#         "https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz",
#     ],
# )

# load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

# yarn_install(
#     name = "npm",
#     package_json = "//frontend:package.json",
#     yarn_lock = "//frontend:yarn.lock",
#     strict_visibility = False,
# )

# load(
#     "@io_bazel_rules_docker//nodejs:image.bzl",
#     _nodejs_image_repos = "repositories",
# )

# _nodejs_image_repos()

# load("@npm//@bazel/postcss:package.bzl", "rules_postcss_dependencies")
# rules_postcss_dependencies()