// skillsImage.tsx

import adobeXd from "../assets/svg/skills/adobe-xd.svg";
import adobeaudition from "../assets/svg/skills/adobeaudition.svg";
import afterEffects from "../assets/svg/skills/after-effects.svg";
import angular from "../assets/svg/skills/angular.svg";
import aws from "../assets/svg/skills/aws.svg";
import azure from "../assets/svg/skills/azure.svg";
import blender from "../assets/svg/skills/blender.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import bulma from "../assets/svg/skills/bulma.svg";
import c from "../assets/svg/skills/c.svg";
import canva from "../assets/svg/skills/canva.svg";
import capacitorjs from "../assets/svg/skills/capacitorjs.svg";
import coffeescript from "../assets/svg/skills/coffeescript.svg";
import cplusplus from "../assets/svg/skills/cplusplus.svg";
import csharp from "../assets/svg/skills/csharp.svg";
import css from "../assets/svg/skills/css.svg";
import dart from "../assets/svg/skills/dart.svg";
import deno from "../assets/svg/skills/deno.svg";
import django from "../assets/svg/skills/django.svg";
import docker from "../assets/svg/skills/docker.svg";
import fastify from "../assets/svg/skills/fastify.svg";
import figma from "../assets/svg/skills/figma.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import flutter from "../assets/svg/skills/flutter.svg";
import gcp from "../assets/svg/skills/gcp.svg";
import gimp from "../assets/svg/skills/gimp.svg";
import git from "../assets/svg/skills/git.svg";
import go from "../assets/svg/skills/go.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import haxe from "../assets/svg/skills/haxe.svg";
import html from "../assets/svg/skills/html.svg";
import illustrator from "../assets/svg/skills/illustrator.svg";
import ionic from "../assets/svg/skills/ionic.svg";
import java from "../assets/svg/skills/java.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import julia from "../assets/svg/skills/julia.svg";
import kotlin from "../assets/svg/skills/kotlin.svg";
import lightroom from "../assets/svg/skills/lightroom.svg";
import markdown from "../assets/svg/skills/markdown.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import matlab from "../assets/svg/skills/matlab.svg";
import memsql from "../assets/svg/skills/memsql.svg";
import microsoftoffice from "../assets/svg/skills/microsoftoffice.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import mysql from "../assets/svg/skills/mysql.svg";
import nextJS from "../assets/svg/skills/nextJS.svg";
import nginx from "../assets/svg/skills/nginx.svg";
import numpy from "../assets/svg/skills/numpy.svg";
import nuxtJS from "../assets/svg/skills/nuxtJS.svg";
import opencv from "../assets/svg/skills/opencv.svg";
import photoshop from "../assets/svg/skills/photoshop.svg";
import php from "../assets/svg/skills/php.svg";
import picsart from "../assets/svg/skills/picsart.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import premierepro from "../assets/svg/skills/premierepro.svg";
import python from "../assets/svg/skills/python.svg";
import pytorch from "../assets/svg/skills/pytorch.svg";
import react from "../assets/svg/skills/react.svg";
import ruby from "../assets/svg/skills/ruby.svg";
import selenium from "../assets/svg/skills/selenium.svg";
import sketch from "../assets/svg/skills/sketch.svg";
import strapi from "../assets/svg/skills/strapi.svg";
import svelte from "../assets/svg/skills/svelte.svg";
import swift from "../assets/svg/skills/swift.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import tensorflow from "../assets/svg/skills/tensorflow.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import unity from "../assets/svg/skills/unity.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";
import vue from "../assets/svg/skills/vue.svg";
import vuetifyjs from "../assets/svg/skills/vuetifyjs.svg";
import webix from "../assets/svg/skills/webix.svg";
import wolframalpha from "../assets/svg/skills/wolframalpha.svg";
import wordpress from "../assets/svg/skills/wordpress.svg";
import pandas from "../assets/svg/skills/pandas.svg";
import scikitlearn from "../assets/svg/skills/scikit-learn.svg";
import dotnet from "../assets/svg/skills/dotnet.svg";
import dotnetcore from "../assets/svg/skills/dotnetcore.svg";
import kubernetes from "../assets/svg/skills/kubernetes.svg";
import linux from "../assets/svg/skills/linux.svg";
import sqlalchemy from "../assets/svg/skills/sqlalchemy.svg";
import fastapi from "../assets/svg/skills/fastapi.svg";

// Define a return type for the images
type SkillImage = string; // or more specifically: `StaticImageData` if using `next/image`

export const skillsImage = (skill: string): SkillImage | undefined => {
  const skillID = skill.toLowerCase();

  const skillsMap: Record<string, SkillImage> = {
    gcp: gcp,
    html: html,
    photoshop: photoshop,
    docker: docker,
    illustrator: illustrator,
    "adobe xd": adobeXd,
    "after effects": afterEffects,
    css: css,
    angular: angular,
    javascript: javascript,
    "next js": nextJS,
    "nuxt js": nuxtJS,
    react: react,
    svelte: svelte,
    typescript: typescript,
    vue: vue,
    bootstrap: bootstrap,
    bulma: bulma,
    capacitorjs: capacitorjs,
    coffeescript: coffeescript,
    memsql: memsql,
    mongodb: mongoDB,
    mysql: mysql,
    postgresql: postgresql,
    tailwind: tailwind,
    vitejs: vitejs,
    vuetifyjs: vuetifyjs,
    c: c,
    "c++": cplusplus,
    "c#": csharp,
    dart: dart,
    go: go,
    java: java,
    kotlin: kotlin,
    julia: julia,
    matlab: matlab,
    php: php,
    python: python,
    ruby: ruby,
    swift: swift,
    "adobe audition": adobeaudition,
    aws: aws,
    deno: deno,
    django: django,
    firebase: firebase,
    gimp: gimp,
    git: git,
    graphql: graphql,
    lightroom: lightroom,
    materialui: materialui,
    nginx: nginx,
    numpy: numpy,
    opencv: opencv,
    "premiere pro": premierepro,
    pytorch: pytorch,
    selenium: selenium,
    strapi: strapi,
    tensorflow: tensorflow,
    webix: webix,
    wordpress: wordpress,
    azure: azure,
    blender: blender,
    fastify: fastify,
    figma: figma,
    flutter: flutter,
    haxe: haxe,
    ionic: ionic,
    markdown: markdown,
    "microsoft office": microsoftoffice,
    picsart: picsart,
    sketch: sketch,
    unity: unity,
    wolframalpha: wolframalpha,
    canva: canva,
    pandas: pandas,
    sklearn: scikitlearn,
    ".net": dotnet,
    ".net core": dotnetcore,
    kubernetes: kubernetes,
    linux: linux,
    sqlalchemy: sqlalchemy,
    fastapi: fastapi,
  };

  return skillsMap[skillID];
};
