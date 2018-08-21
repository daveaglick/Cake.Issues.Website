
var camelCaseTokenizer = function (builder) {

  var pipelineFunction = function (token) {
    var previous = '';
    // split camelCaseString to on each word and combined words
    // e.g. camelCaseTokenizer -> ['camel', 'case', 'camelcase', 'tokenizer', 'camelcasetokenizer']
    var tokenStrings = token.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
      var current = cur.toLowerCase();
      if (acc.length === 0) {
        previous = current;
        return acc.concat(current);
      }
      previous = previous.concat(current);
      return acc.concat([current, previous]);
    }, []);

    // return token for each string
    // will copy any metadata on input token
    return tokenStrings.map(function(tokenString) {
      return token.clone(function(str) {
        return tokenString;
      })
    });
  }

  lunr.Pipeline.registerFunction(pipelineFunction, 'camelCaseTokenizer')

  builder.pipeline.before(lunr.stemmer, pipelineFunction)
}
var searchModule = function() {
    var documents = [];
    var idMap = [];
    function a(a,b) { 
        documents.push(a);
        idMap.push(b); 
    }

    a(
        {
            id:0,
            title:"EsLintIssuesSettings",
            content:"EsLintIssuesSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesSettings',
            title:"EsLintIssuesSettings",
            description:""
        }
    );
    a(
        {
            id:1,
            title:"DevExtremeTheme",
            content:"DevExtremeTheme",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/DevExtremeTheme',
            title:"DevExtremeTheme",
            description:""
        }
    );
    a(
        {
            id:2,
            title:"MsBuildIssuesAliases",
            content:"MsBuildIssuesAliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesAliases',
            title:"MsBuildIssuesAliases",
            description:""
        }
    );
    a(
        {
            id:3,
            title:"EsLintIssuesAliases",
            content:"EsLintIssuesAliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesAliases',
            title:"EsLintIssuesAliases",
            description:""
        }
    );
    a(
        {
            id:4,
            title:"IssuesAliasConstants",
            content:"IssuesAliasConstants",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IssuesAliasConstants',
            title:"IssuesAliasConstants",
            description:""
        }
    );
    a(
        {
            id:5,
            title:"PullRequestDiscussionThread",
            content:"PullRequestDiscussionThread",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionThread',
            title:"PullRequestDiscussionThread",
            description:""
        }
    );
    a(
        {
            id:6,
            title:"RepositorySettings",
            content:"RepositorySettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/RepositorySettings',
            title:"RepositorySettings",
            description:""
        }
    );
    a(
        {
            id:7,
            title:"PullRequestIssuesException",
            content:"PullRequestIssuesException",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestIssuesException',
            title:"PullRequestIssuesException",
            description:""
        }
    );
    a(
        {
            id:8,
            title:"BaseMultiFormatIssueProviderFixture",
            content:"BaseMultiFormatIssueProviderFixture",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/BaseMultiFormatIssueProviderFixture_3',
            title:"BaseMultiFormatIssueProviderFixture<TIssueProvider, TSettings, TLogFileFormat>",
            description:""
        }
    );
    a(
        {
            id:9,
            title:"BaseMarkdownlintLogFileFormat",
            content:"BaseMarkdownlintLogFileFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/BaseMarkdownlintLogFileFormat',
            title:"BaseMarkdownlintLogFileFormat",
            description:""
        }
    );
    a(
        {
            id:10,
            title:"HtmlDxDataGridOption",
            content:"HtmlDxDataGridOption",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/HtmlDxDataGridOption',
            title:"HtmlDxDataGridOption",
            description:""
        }
    );
    a(
        {
            id:11,
            title:"PullRequestIssueResult",
            content:"PullRequestIssueResult",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestIssueResult',
            title:"PullRequestIssueResult",
            description:""
        }
    );
    a(
        {
            id:12,
            title:"InspectCodeIssuesAliases",
            content:"InspectCodeIssuesAliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.InspectCode/InspectCodeIssuesAliases',
            title:"InspectCodeIssuesAliases",
            description:""
        }
    );
    a(
        {
            id:13,
            title:"IIssueReportFormat",
            content:"IIssueReportFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/IIssueReportFormat',
            title:"IIssueReportFormat",
            description:""
        }
    );
    a(
        {
            id:14,
            title:"IssueProviderSettings",
            content:"IssueProviderSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IssueProviderSettings',
            title:"IssueProviderSettings",
            description:""
        }
    );
    a(
        {
            id:15,
            title:"IssuesReader",
            content:"IssuesReader",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IssuesReader',
            title:"IssuesReader",
            description:""
        }
    );
    a(
        {
            id:16,
            title:"MarkdownlintRuleDescription",
            content:"MarkdownlintRuleDescription",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintRuleDescription',
            title:"MarkdownlintRuleDescription",
            description:""
        }
    );
    a(
        {
            id:17,
            title:"Issue",
            content:"Issue",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/Issue',
            title:"Issue",
            description:""
        }
    );
    a(
        {
            id:18,
            title:"GenericIssueReportTemplate",
            content:"GenericIssueReportTemplate",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportTemplate',
            title:"GenericIssueReportTemplate",
            description:""
        }
    );
    a(
        {
            id:19,
            title:"GenericIssueReportFormatAliases",
            content:"GenericIssueReportFormatAliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatAliases',
            title:"GenericIssueReportFormatAliases",
            description:""
        }
    );
    a(
        {
            id:20,
            title:"PullRequestsAliasConstants",
            content:"PullRequestsAliasConstants",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestsAliasConstants',
            title:"PullRequestsAliasConstants",
            description:""
        }
    );
    a(
        {
            id:21,
            title:"CreateIssueReportSettings",
            content:"CreateIssueReportSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/CreateIssueReportSettings',
            title:"CreateIssueReportSettings",
            description:""
        }
    );
    a(
        {
            id:22,
            title:"MarkdownlintIssuesSettings",
            content:"MarkdownlintIssuesSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesSettings',
            title:"MarkdownlintIssuesSettings",
            description:""
        }
    );
    a(
        {
            id:23,
            title:"PullRequestDiscussionComment",
            content:"PullRequestDiscussionComment",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionComment',
            title:"PullRequestDiscussionComment",
            description:""
        }
    );
    a(
        {
            id:24,
            title:"IssuePriority",
            content:"IssuePriority",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IssuePriority',
            title:"IssuePriority",
            description:""
        }
    );
    a(
        {
            id:25,
            title:"DocFxIssuesSettings",
            content:"DocFxIssuesSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.DocFx/DocFxIssuesSettings',
            title:"DocFxIssuesSettings",
            description:""
        }
    );
    a(
        {
            id:26,
            title:"ReportColumn",
            content:"ReportColumn",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ReportColumn',
            title:"ReportColumn",
            description:""
        }
    );
    a(
        {
            id:27,
            title:"FakeMultiFormatIssueProvider",
            content:"FakeMultiFormatIssueProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeMultiFormatIssueProvider',
            title:"FakeMultiFormatIssueProvider",
            description:""
        }
    );
    a(
        {
            id:28,
            title:"ReportIssuesToPullRequestSettings",
            content:"ReportIssuesToPullRequestSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/ReportIssuesToPullRequestSettings',
            title:"ReportIssuesToPullRequestSettings",
            description:""
        }
    );
    a(
        {
            id:29,
            title:"Aliases",
            content:"Aliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/Aliases',
            title:"Aliases",
            description:""
        }
    );
    a(
        {
            id:30,
            title:"TfsPullRequestVote",
            content:"TfsPullRequestVote",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestVote',
            title:"TfsPullRequestVote",
            description:""
        }
    );
    a(
        {
            id:31,
            title:"PullRequestDiscussionStatus",
            content:"PullRequestDiscussionStatus",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionStatus',
            title:"PullRequestDiscussionStatus",
            description:""
        }
    );
    a(
        {
            id:32,
            title:"BaseRuleUrlResolver",
            content:"BaseRuleUrlResolver",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/BaseRuleUrlResolver_1',
            title:"BaseRuleUrlResolver<T>",
            description:""
        }
    );
    a(
        {
            id:33,
            title:"ReportingAliasConstants",
            content:"ReportingAliasConstants",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/ReportingAliasConstants',
            title:"ReportingAliasConstants",
            description:""
        }
    );
    a(
        {
            id:34,
            title:"ByteArrayExtensions",
            content:"ByteArrayExtensions",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/ByteArrayExtensions',
            title:"ByteArrayExtensions",
            description:""
        }
    );
    a(
        {
            id:35,
            title:"IssuesArgumentChecks",
            content:"IssuesArgumentChecks",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IssuesArgumentChecks',
            title:"IssuesArgumentChecks",
            description:""
        }
    );
    a(
        {
            id:36,
            title:"PullRequestDiscussionResolution",
            content:"PullRequestDiscussionResolution",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionResolution',
            title:"PullRequestDiscussionResolution",
            description:""
        }
    );
    a(
        {
            id:37,
            title:"PullRequestSystem",
            content:"PullRequestSystem",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestSystem',
            title:"PullRequestSystem",
            description:""
        }
    );
    a(
        {
            id:38,
            title:"FakeRuleDescription",
            content:"FakeRuleDescription",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeRuleDescription',
            title:"FakeRuleDescription",
            description:""
        }
    );
    a(
        {
            id:39,
            title:"BaseIssueComponent",
            content:"BaseIssueComponent",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/BaseIssueComponent_1',
            title:"BaseIssueComponent<T>",
            description:""
        }
    );
    a(
        {
            id:40,
            title:"GenericIssueReportFormatSettingsExtensions",
            content:"GenericIssueReportFormatSettingsExtensions",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatSettingsExtensions',
            title:"GenericIssueReportFormatSettingsExtensions",
            description:""
        }
    );
    a(
        {
            id:41,
            title:"TfsPullRequestSystemAliases",
            content:"TfsPullRequestSystemAliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSystemAliases',
            title:"TfsPullRequestSystemAliases",
            description:""
        }
    );
    a(
        {
            id:42,
            title:"DevExtremeThemeExtensions",
            content:"DevExtremeThemeExtensions",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/DevExtremeThemeExtensions',
            title:"DevExtremeThemeExtensions",
            description:""
        }
    );
    a(
        {
            id:43,
            title:"BaseRuleDescription",
            content:"BaseRuleDescription",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/BaseRuleDescription',
            title:"BaseRuleDescription",
            description:""
        }
    );
    a(
        {
            id:44,
            title:"FakeRuleUrlResolver",
            content:"FakeRuleUrlResolver",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeRuleUrlResolver',
            title:"FakeRuleUrlResolver",
            description:""
        }
    );
    a(
        {
            id:45,
            title:"MsBuildIssuesAliases",
            content:"MsBuildIssuesAliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild.LogFileFormat/MsBuildIssuesAliases',
            title:"MsBuildIssuesAliases",
            description:""
        }
    );
    a(
        {
            id:46,
            title:"BaseMsBuildLogFileFormat",
            content:"BaseMsBuildLogFileFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/BaseMsBuildLogFileFormat',
            title:"BaseMsBuildLogFileFormat",
            description:""
        }
    );
    a(
        {
            id:47,
            title:"ViewBagHelper",
            content:"ViewBagHelper",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ViewBagHelper',
            title:"ViewBagHelper",
            description:""
        }
    );
    a(
        {
            id:48,
            title:"IssueCommentFormat",
            content:"IssueCommentFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IssueCommentFormat',
            title:"IssueCommentFormat",
            description:""
        }
    );
    a(
        {
            id:49,
            title:"FakeMultiFormatIssueProviderSettings",
            content:"FakeMultiFormatIssueProviderSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeMultiFormatIssueProviderSettings',
            title:"FakeMultiFormatIssueProviderSettings",
            description:""
        }
    );
    a(
        {
            id:50,
            title:"MsBuildRuleDescription",
            content:"MsBuildRuleDescription",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildRuleDescription',
            title:"MsBuildRuleDescription",
            description:""
        }
    );
    a(
        {
            id:51,
            title:"DocFxIssuesAliases",
            content:"DocFxIssuesAliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.DocFx/DocFxIssuesAliases',
            title:"DocFxIssuesAliases",
            description:""
        }
    );
    a(
        {
            id:52,
            title:"FileLinkSettings",
            content:"FileLinkSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/FileLinkSettings',
            title:"FileLinkSettings",
            description:""
        }
    );
    a(
        {
            id:53,
            title:"ColumnSortOrder",
            content:"ColumnSortOrder",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ColumnSortOrder',
            title:"ColumnSortOrder",
            description:""
        }
    );
    a(
        {
            id:54,
            title:"BaseEsLintLogFileFormat",
            content:"BaseEsLintLogFileFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/BaseEsLintLogFileFormat',
            title:"BaseEsLintLogFileFormat",
            description:""
        }
    );
    a(
        {
            id:55,
            title:"Aliases",
            content:"Aliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/Aliases',
            title:"Aliases",
            description:""
        }
    );
    a(
        {
            id:56,
            title:"ExceptionAssertExtensions",
            content:"ExceptionAssertExtensions",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/ExceptionAssertExtensions',
            title:"ExceptionAssertExtensions",
            description:""
        }
    );
    a(
        {
            id:57,
            title:"IIssue",
            content:"IIssue",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IIssue',
            title:"IIssue",
            description:""
        }
    );
    a(
        {
            id:58,
            title:"TfsPullRequestSettings",
            content:"TfsPullRequestSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSettings',
            title:"TfsPullRequestSettings",
            description:""
        }
    );
    a(
        {
            id:59,
            title:"InspectCodeIssuesSettings",
            content:"InspectCodeIssuesSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.InspectCode/InspectCodeIssuesSettings',
            title:"InspectCodeIssuesSettings",
            description:""
        }
    );
    a(
        {
            id:60,
            title:"IssueReportFormat",
            content:"IssueReportFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/IssueReportFormat',
            title:"IssueReportFormat",
            description:""
        }
    );
    a(
        {
            id:61,
            title:"FakeLogFileFormat",
            content:"FakeLogFileFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeLogFileFormat',
            title:"FakeLogFileFormat",
            description:""
        }
    );
    a(
        {
            id:62,
            title:"IIssueProvider",
            content:"IIssueProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IIssueProvider',
            title:"IIssueProvider",
            description:""
        }
    );
    a(
        {
            id:63,
            title:"IIssueExtension",
            content:"IIssueExtension",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/IIssueExtension',
            title:"IIssueExtension",
            description:""
        }
    );
    a(
        {
            id:64,
            title:"BaseConfigurableIssueProviderFixture",
            content:"BaseConfigurableIssueProviderFixture",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/BaseConfigurableIssueProviderFixture_2',
            title:"BaseConfigurableIssueProviderFixture<TIssueProvider, TSettings>",
            description:""
        }
    );
    a(
        {
            id:65,
            title:"IPullRequestDiscussionThread",
            content:"IPullRequestDiscussionThread",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestDiscussionThread',
            title:"IPullRequestDiscussionThread",
            description:""
        }
    );
    a(
        {
            id:66,
            title:"GenericIssueReportFormatSettings",
            content:"GenericIssueReportFormatSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatSettings',
            title:"GenericIssueReportFormatSettings",
            description:""
        }
    );
    a(
        {
            id:67,
            title:"FakeConfigurableIssueProvider",
            content:"FakeConfigurableIssueProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeConfigurableIssueProvider',
            title:"FakeConfigurableIssueProvider",
            description:""
        }
    );
    a(
        {
            id:68,
            title:"ColumnSortOrderExtensions",
            content:"ColumnSortOrderExtensions",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ColumnSortOrderExtensions',
            title:"ColumnSortOrderExtensions",
            description:""
        }
    );
    a(
        {
            id:69,
            title:"MarkdownlintIssuesAliases",
            content:"MarkdownlintIssuesAliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesAliases',
            title:"MarkdownlintIssuesAliases",
            description:""
        }
    );
    a(
        {
            id:70,
            title:"ResourceTempFile",
            content:"ResourceTempFile",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/ResourceTempFile',
            title:"ResourceTempFile",
            description:""
        }
    );
    a(
        {
            id:71,
            title:"BaseConfigurableIssueProvider",
            content:"BaseConfigurableIssueProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/BaseConfigurableIssueProvider_1',
            title:"BaseConfigurableIssueProvider<T>",
            description:""
        }
    );
    a(
        {
            id:72,
            title:"MsBuildIssuesProvider",
            content:"MsBuildIssuesProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesProvider',
            title:"MsBuildIssuesProvider",
            description:""
        }
    );
    a(
        {
            id:73,
            title:"IPullRequestDiscussionComment",
            content:"IPullRequestDiscussionComment",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestDiscussionComment',
            title:"IPullRequestDiscussionComment",
            description:""
        }
    );
    a(
        {
            id:74,
            title:"BaseMultiFormatIssueProviderSettings",
            content:"BaseMultiFormatIssueProviderSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/BaseMultiFormatIssueProviderSettings_2',
            title:"BaseMultiFormatIssueProviderSettings<TIssueProvider, TSettings>",
            description:""
        }
    );
    a(
        {
            id:75,
            title:"EsLintIssuesProvider",
            content:"EsLintIssuesProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesProvider',
            title:"EsLintIssuesProvider",
            description:""
        }
    );
    a(
        {
            id:76,
            title:"ILogFileFormat",
            content:"ILogFileFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/ILogFileFormat_2',
            title:"ILogFileFormat<TIssueProvider, TSettings>",
            description:""
        }
    );
    a(
        {
            id:77,
            title:"Aliases",
            content:"Aliases",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/Aliases',
            title:"Aliases",
            description:""
        }
    );
    a(
        {
            id:78,
            title:"BaseLogFileFormat",
            content:"BaseLogFileFormat",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/BaseLogFileFormat_2',
            title:"BaseLogFileFormat<TIssueProvider, TSettings>",
            description:""
        }
    );
    a(
        {
            id:79,
            title:"MsBuildIssuesSettings",
            content:"MsBuildIssuesSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesSettings',
            title:"MsBuildIssuesSettings",
            description:""
        }
    );
    a(
        {
            id:80,
            title:"MarkdownlintIssuesProvider",
            content:"MarkdownlintIssuesProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesProvider',
            title:"MarkdownlintIssuesProvider",
            description:""
        }
    );
    a(
        {
            id:81,
            title:"BaseMultiFormatIssueProvider",
            content:"BaseMultiFormatIssueProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/BaseMultiFormatIssueProvider_2',
            title:"BaseMultiFormatIssueProvider<TSettings, TIssueProvider>",
            description:""
        }
    );
    a(
        {
            id:82,
            title:"BaseIssueProviderFixture",
            content:"BaseIssueProviderFixture",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/BaseIssueProviderFixture_1',
            title:"BaseIssueProviderFixture<T>",
            description:""
        }
    );
    a(
        {
            id:83,
            title:"StringPathExtensions",
            content:"StringPathExtensions",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/StringPathExtensions',
            title:"StringPathExtensions",
            description:""
        }
    );
    a(
        {
            id:84,
            title:"ITfsCredentials",
            content:"ITfsCredentials",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/ITfsCredentials',
            title:"ITfsCredentials",
            description:""
        }
    );
    a(
        {
            id:85,
            title:"HtmlDxDataGridColumnDescription",
            content:"HtmlDxDataGridColumnDescription",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/HtmlDxDataGridColumnDescription',
            title:"HtmlDxDataGridColumnDescription",
            description:""
        }
    );
    a(
        {
            id:86,
            title:"IPullRequestSystemExtension",
            content:"IPullRequestSystemExtension",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestSystemExtension',
            title:"IPullRequestSystemExtension",
            description:""
        }
    );
    a(
        {
            id:87,
            title:"IPullRequestSystem",
            content:"IPullRequestSystem",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestSystem',
            title:"IPullRequestSystem",
            description:""
        }
    );
    a(
        {
            id:88,
            title:"ReadIssuesSettings",
            content:"ReadIssuesSettings",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/ReadIssuesSettings',
            title:"ReadIssuesSettings",
            description:""
        }
    );
    a(
        {
            id:89,
            title:"BaseIssueProvider",
            content:"BaseIssueProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/BaseIssueProvider',
            title:"BaseIssueProvider",
            description:""
        }
    );
    a(
        {
            id:90,
            title:"IBaseIssueComponent",
            content:"IBaseIssueComponent",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IBaseIssueComponent_1',
            title:"IBaseIssueComponent<T>",
            description:""
        }
    );
    a(
        {
            id:91,
            title:"FakeIssueComponent",
            content:"FakeIssueComponent",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeIssueComponent',
            title:"FakeIssueComponent",
            description:""
        }
    );
    a(
        {
            id:92,
            title:"IssueBuilder",
            content:"IssueBuilder",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues/IssueBuilder',
            title:"IssueBuilder",
            description:""
        }
    );
    a(
        {
            id:93,
            title:"FakeIssueProvider",
            content:"FakeIssueProvider",
            description:'',
            tags:''
        },
        {
            url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeIssueProvider',
            title:"FakeIssueProvider",
            description:""
        }
    );
    var idx = lunr(function() {
        this.field('title');
        this.field('content');
        this.field('description');
        this.field('tags');
        this.ref('id');
        this.use(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
        documents.forEach(function (doc) { this.add(doc) }, this)
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
