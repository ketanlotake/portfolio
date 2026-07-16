/* Language toggle for the portfolio.

   Japanese only — English is not duplicated here. It lives in index.html and is
   read out of the DOM at startup, so every string is authored in exactly one
   place and the two can never drift apart. It also means the page degrades
   cleanly: with JavaScript off it renders as the English document it already
   is, minus the toggle.

   Keys match the data-i18n* attributes in index.html. Entries ending in Html
   carry the .metric spans and are injected as markup, so they must stay
   authored here and never take outside input.

   Japanese aims at JLPT N3, keeping a few N2 terms (削減, 拡張性, 変革, 移行,
   導入) where the simpler word would read as vague. */
(function () {
  "use strict";

  const japanese = {
    langToggle: "English",
    langToggleAria: "英語に切り替える",

    title: "ケタン・ロタケ | ソフトウェアエンジニア",
    metaDescription:
      "ケタン・ロタケのポートフォリオ。銀行・保険システムで7年以上の経験を持つソフトウェア開発エンジニア。",

    navSummary: "概要",
    navStack: "技術スタック",
    navExperience: "職務経歴",
    navProjects: "プロジェクト",

    heroPill: "ソフトウェアエンジニア | 東京",
    heroTitle: "信頼できるシステムと、数字で見えるビジネス成果を重視するソフトウェアエンジニア。",
    heroBodyHtml:
      '<span class="metric">7年以上</span>にわたり、金融ビジネスの変革に取り組み、システムの拡張性、自動化、リリースの安定性を高めてきました。アーキテクチャ、実行、事業戦略をつなぎ、拡張性と性能を両立するシステムを提供します。',
    heroCta: "プロジェクトを見る",
    photoAlt: "ケタン・ロタケのプロフィール写真",

    profileHeading: "プロフィール概要",
    currentRoleTitle: "現在の役割",
    currentRoleBody:
      "メットライフ生命保険株式会社のソフトウェア開発エンジニアとして、東京でエンタープライズ級の保険プラットフォームを作っています。",
    leadershipTitle: "リーダーシップ",
    leadershipBody:
      "自分で手を動かす開発と技術リーダーシップの両方を行い、開発の品質、スピード、ビジネスの優先度のバランスを取ります。",
    impactTitle: "ビジネスへの貢献",
    impactBodyHtml:
      'ベンダーの提案ではなく自社で設計することで、運用・開発・ライセンスの費用を下げ、5年間で約<span class="metric">5億円</span>を削減しました。テストの自動化で年間<span class="metric">1,800万円</span>を減らしました。古いサービスをマイクロサービス、DevOps、クラウドで新しくして、処理できる量を増やしました。',
    deliveryTitle: "デリバリー",
    deliveryBody:
      "アジャイルとSAFeのやり方でデリバリー全体をリードし、きちんとした実行、リスク管理、安定したリリースを続けています。",
    aiTitle: "AIエンジニアリング",
    aiBody:
      "エージェント型AIの考え方、LLM連携、RAGの基本、MCPサーバー開発について、実務で使える知識があります。",
    langTitle: "語学力",
    langBodyHtml:
      '英語はネイティブ、日本語は日常会話レベルの<span class="metric">N3以上</span>で、日本の職場で毎日のやり取りがスムーズにできます。',

    stackHeading: "技術スタック",
    stackFrontend: "フロントエンド／バックエンド",
    stackPlatform: "プラットフォーム",
    stackDatabase: "データベース",

    expHeading: "職務経歴",
    metlifeName: "メットライフ生命保険株式会社（東京）",
    metlifeRole: "ソフトウェア開発エンジニア | 2023年6月 - 現在",
    metlifeBullet1:
      "本番で動いている保険システムのマイクロサービスを作るエンジニアの指導と育成をしています。",
    metlifeBullet2:
      "拡張性のあるクラウドネイティブなリリースについて、アーキテクチャと実行に責任を持っています。",
    rakutenName: "楽天銀行株式会社（東京）",
    rakutenRole: "アプリケーション開発者 | 2018年10月 - 2023年5月",
    rakutenBullet1:
      "モノリシックな環境と新しくしたプラットフォームの両方で、銀行の業務機能を作りました。",
    rakutenBullet2: "きちんとした開発のやり方で、リリースの品質と運用の信頼性を高めました。",

    projHeading: "プロジェクト",
    proj1Meta: "2025年 - 現在 | 開発チームリード",
    proj1Title: "新しい保険商品のリリース",
    proj1Body:
      "アジャイルのやり方で複数の保険商品を本番環境に出し、市場に出すスピードを上げ、ビジネス側へ少しずつ届け、ビジネスと開発チームが強く協力できるようにしました。",
    proj2Meta: "2023年 - 2024年 | エンジニア",
    proj2Title: "クラウド基盤の移行：IaaSからPaaSへ",
    proj2Body:
      "AzureのIaaSをPaaSに移行し、Azure Cosmos DBを導入しました。クラウドネイティブの技術とアジャイル開発を使い、長く使える拡張性と安定した運用を目指して、チームと協力してデジタル変革を進めました。",
    proj3Meta: "2018年 - 2022年 | エンジニア",
    proj3Title: "モノリスからマイクロサービスへの刷新",
    proj3Body:
      "古いモノリシックなシステムをチームと協力してコンテナのサービスに作り直し、主要な機能に影響を与えずに、DevOpsのやり方で拡張性を大きく高め、リリース能力を強化しました。",
    proj4Meta: "2020年 - 2021年 | リードエンジニア",
    proj4Title: "［モノリシック］入出金明細レポートの全期間対応",
    proj4BodyHtml:
      '今あるモノリシックな基盤に新しいサービスを追加する作業をリードし、入出金明細レポートを全期間に対応させ、レポートの連続性と運用の信頼性を高めました。ベンダーの提案よりシンプルな自社の設計にして、チームと協力して、運用・開発・ライセンスの費用を含めて<span class="metric">5年間で約5億円</span>を削減しました。',
    proj5Meta: "2019年 - 2020年 | エンジニア",
    proj5Title: "回帰テストの自動化フレームワーク",
    proj5BodyHtml:
      '回帰テストの自動化フレームワークをチームと協力して設計・開発し、運用の費用を年間で約<span class="metric">1,800万円</span>減らしました。',

    eduHeading: "学歴",
    eduTableAria: "学歴の詳細",
    thDegree: "学位",
    thInstitute: "学校",
    thYear: "取得年",
    thScore: "成績",
    edu1Degree: "修士（工学）コンピュータ工学",
    edu1Institute: "VJTI（ムンバイ）",
    edu1Year: "2018年",
    edu1Score: "CPI 8.83",
    edu2Degree: "学士（工学）コンピュータサイエンス",
    edu2Institute: "KIT（コルハープル）",
    edu2Year: "2015年",
    edu2Score: "62.03%",

    certHeading: "資格と強み",
    cert1: "Javaプログラミング 成績B+（Seed InfoTech）",
    cert2: "上級Javaプログラミング 成績A（Seed InfoTech）",
    cert3Html: '日本語能力：<span class="metric">N3（日常会話）以上</span>',
    cert4: "強み：チームづくり、責任感、自分から動く力、継続的な改善",
  };

  const STORAGE_KEY = "portfolio-lang";
  const EN = "en";
  const JA = "ja";

  /* How to read and write each flavour of translatable content. Supporting a new
     one means adding an entry here, not another loop in two places. */
  const BINDING_KINDS = [
    {
      attribute: "data-i18n",
      read: (el) => el.textContent.trim(),
      write: (el, value) => {
        el.textContent = value;
      },
    },
    {
      attribute: "data-i18n-html",
      read: (el) => el.innerHTML.trim(),
      write: (el, value) => {
        el.innerHTML = value;
      },
    },
    {
      attribute: "data-i18n-label",
      read: (el) => el.getAttribute("data-label") ?? "",
      write: (el, value) => el.setAttribute("data-label", value),
    },
    {
      attribute: "data-i18n-alt",
      read: (el) => el.getAttribute("alt") ?? "",
      write: (el, value) => el.setAttribute("alt", value),
    },
    {
      attribute: "data-i18n-aria",
      read: (el) => el.getAttribute("aria-label") ?? "",
      write: (el, value) => el.setAttribute("aria-label", value),
    },
  ];

  /* Resolved once at startup: the element, how to write it, its Japanese, and the
     English it shipped with. Switching languages then runs one flat loop and
     touches no selectors. */
  let bindings = [];
  let descriptionMeta = null;
  let englishTitle = "";
  let englishDescription = "";

  function collectBindings() {
    const collected = [];

    for (const kind of BINDING_KINDS) {
      for (const el of document.querySelectorAll(`[${kind.attribute}]`)) {
        const key = el.getAttribute(kind.attribute);
        const translated = japanese[key];

        /* A typo in the markup should cost one string, not the whole page. */
        if (typeof translated !== "string") {
          console.warn(`i18n: no Japanese for "${key}" — leaving English in place.`);
          continue;
        }

        collected.push({ el, translated, write: kind.write, english: kind.read(el) });
      }
    }

    return collected;
  }

  function applyLanguage(lang) {
    const toJapanese = lang === JA;
    if (!toJapanese && lang !== EN) return;

    document.documentElement.lang = lang;

    for (const binding of bindings) {
      binding.write(binding.el, toJapanese ? binding.translated : binding.english);
    }

    document.title = toJapanese ? japanese.title : englishTitle;

    if (descriptionMeta) {
      descriptionMeta.content = toJapanese ? japanese.metaDescription : englishDescription;
    }

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      /* Private browsing can block storage; the toggle still works this visit. */
    }
  }

  function storedLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) === JA ? JA : EN;
    } catch (err) {
      return EN;
    }
  }

  function init() {
    bindings = collectBindings();

    descriptionMeta = document.querySelector('meta[name="description"]');
    englishTitle = document.title;
    englishDescription = descriptionMeta ? descriptionMeta.content : "";

    /* The markup is already English, so only Japanese needs applying on load. */
    if (storedLanguage() === JA) applyLanguage(JA);

    const toggle = document.querySelector(".lang-toggle");
    if (!toggle) return;

    toggle.addEventListener("click", () => {
      applyLanguage(document.documentElement.lang === JA ? EN : JA);
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
